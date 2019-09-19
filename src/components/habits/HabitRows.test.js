import React from "react";
import { shallow, mount } from "enzyme";
import HabitRows from "./HabitRows";

jest.mock("../../utils/dateUtils.js", () => ({
  getTodayIndex: jest.fn().mockReturnValue(1)
}));

describe("HabitRows component", () => {
  it("Renders static elements", () => {
    const habitRows = shallow(<HabitRows username="rafa" habits={[]} />);
    expect(habitRows).toMatchSnapshot();
  });

  it("Shows the correct ammount of habits", () => {
    const checked = [false, false, false, false, false, false, false];
    const habitRows = shallow(
      <HabitRows
        habits={[
          { name: "exercise", frequency: 1, checked },
          { name: "read", frequency: 1, checked }
        ]}
      />
    );
    expect(habitRows.find(".habit__row").length).toBe(2);
  });

  it("marks habits performing", () => {
    const checked = [true, true, false, false, true, false, false];
    const habitRows = shallow(
      <HabitRows
        habits={[
          { name: "no status", frequency: 5, checked },
          { name: "ok", frequency: 5, checked, habitSucceded: true },
          { name: "failed", frequency: 6, checked, habitFailed: true }
        ]}
      />
    );
    expect(habitRows.find(".table-danger").length).toBe(1);
    expect(habitRows.find(".table-success").length).toBe(1);
  });

  it("disables checkboxes for dates in the future", () => {
    const checked = [true, true, false, false, true, false, false];
    const habitRows = shallow(
      <HabitRows habits={[{ name: "no status", frequency: 5, checked }]} />
    );
    expect(habitRows.find("[isDisabled=true]").length).toBe(5);
  });

  it("Hides action container when is in readonly mode and disables checkboxes", () => {
    const habitRows = shallow(<habitRows habits={[{}]} isReadOnly={true} />);
    expect(habitRows.find("[isReadOnly=true]").length).toBe(1);
    expect(habitRows.find(".habit__cell-action-container").length).toBe(0);
  });

  it("toggles habits", () => {
    const toggleDayHabitMock = jest.fn();
    const habitRows = mount(
      <HabitRows
        habits={[
          {
            name: "ok",
            frequency: 3,
            checked: [true, true, false, false, false, false, false]
          }
        ]}
        toggleDayHabit={toggleDayHabitMock}
      />
    );
    habitRows
      .find("input")
      .at(0)
      .simulate("change");
    expect(toggleDayHabitMock).toHaveBeenCalledTimes(1);
  });
});
