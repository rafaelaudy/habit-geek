import React from "react";
import { shallow } from "enzyme";
import HabitRowActions from "./HabitRowActions";

jest.mock("@rafael.audy/habit-geek-utils/utils/dateUtils.js", () => ({
  getCurrentWeek: jest.fn().mockReturnValue("y1w1")
}));

describe("HabitRowActions component", () => {
  it("Renders static elements", () => {
    const habitRowActions = shallow(
      <HabitRowActions week="y1w1" name="name" onUpdateHabit={() => {}} />
    );
    expect(habitRowActions).toMatchSnapshot();
  });

  it("updates habit on click", () => {
    const onUpdateHabitMock = jest.fn();
    const habitRowActions = shallow(
      <HabitRowActions
        week="y1w1"
        name="name"
        onUpdateHabit={onUpdateHabitMock}
      />
    );
    habitRowActions.find("button").simulate("click");
    expect(onUpdateHabitMock).toHaveBeenCalledTimes(1);
  });

  it("does not render actions on previous weeks", () => {
    const habitRowActions = shallow(
      <HabitRowActions week="y1w0" name="name" onUpdateHabit={() => {}} />
    );
    expect(habitRowActions.find("FontAwesomeIcon").length).toEqual(0);
  });
});
