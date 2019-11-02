import React from "react";
import { shallow, mount } from "enzyme";
import HabitRowFrequency from "./HabitRowFrequency";
import { isToday } from "@habit-geek/shared/utils/dateUtils";

jest.mock("@habit-geek/shared/utils/dateUtils.js", () => ({
  getTodayIndex: jest.fn().mockReturnValue(1),
  getCurrentWeek: jest.fn().mockReturnValue("y1w1"),
  isToday: jest.fn().mockReturnValue(false)
}));

const checked = [true, true, false, false, true, false, false];

describe("HabitRowFrequency component", () => {
  it("Renders static elements", () => {
    const habitRowFrequency = shallow(
      <HabitRowFrequency
        week="week"
        name="name"
        checked={checked}
        habitSucceded={false}
        habitFailed={false}
        isReadOnly={true}
        toggleDayHabit={() => {}}
      />
    );
    expect(habitRowFrequency).toMatchSnapshot();
  });

  it("marks habits performing", () => {
    const habitRowFrequency = shallow(
      <HabitRowFrequency checked habitSucceded={true} habitFailed={true} />
    );
    expect(habitRowFrequency.find(".table-danger").length).toBe(1);
    expect(habitRowFrequency.find(".table-success").length).toBe(1);
  });

  it("shows border around current date", () => {
    isToday.mockReturnValueOnce(true);
    const habitRowFrequency = shallow(<HabitRowFrequency checked={checked} />);
    expect(
      habitRowFrequency.find(".habit-row-frequency__cell--today").length
    ).toBe(1);
  });

  it("disables checkboxes for dates in the future", () => {
    const habitRowFrequency = shallow(
      <HabitRowFrequency week="y1w1" checked={checked} />
    );
    expect(habitRowFrequency.find("[isDisabled=true]").length).toBe(5);
  });

  it("do not disable checkboxes in previous weeks", () => {
    const habitRowFrequency = shallow(
      <HabitRowFrequency week="y1w0" checked={checked} />
    );
    expect(habitRowFrequency.find("[isDisabled=true]").length).toBe(0);
  });

  it("toggles habits", () => {
    const toggleDayHabitMock = jest.fn();
    const habitRowFrequency = mount(
      <HabitRowFrequency
        checked={checked}
        toggleDayHabit={toggleDayHabitMock}
      />
    );
    habitRowFrequency
      .find("input")
      .at(0)
      .simulate("change");
    expect(toggleDayHabitMock).toHaveBeenCalledTimes(1);
  });
});
