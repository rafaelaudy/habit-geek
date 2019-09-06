import React from "react";
import { shallow } from "enzyme";
import NewHabit from "./NewHabit";

describe("NewHabits component", () => {
  it("Renders static elements", () => {
    const newHabits = shallow(<NewHabit></NewHabit>);
    expect(newHabits).toMatchSnapshot();
  });

  it("creates a habit", () => {
    const createHabitMock = jest.fn();
    const newHabits = shallow(
      <NewHabit createHabit={createHabitMock}></NewHabit>
    );
    newHabits
      .find("#new-habit-name")
      .simulate("change", { target: { value: "Read" } });
    newHabits
      .find("#new-habit-type")
      .simulate("change", { target: { value: "Social" } });
    newHabits
      .find("#new-habit-frequency")
      .simulate("change", { target: { value: "1x" } });
    newHabits.find("button").simulate("click");
    expect(createHabitMock).toHaveBeenCalledWith("Read", "Social", "1x");
  });

  it("selects change on blur for accessibility", () => {
    const createHabitMock = jest.fn();
    const newHabits = shallow(
      <NewHabit createHabit={createHabitMock}></NewHabit>
    );
    newHabits
      .find("#new-habit-type")
      .simulate("blur", { target: { value: "Social" } });
    newHabits
      .find("#new-habit-frequency")
      .simulate("blur", { target: { value: "1x" } });
    newHabits.find("button").simulate("click");
    expect(createHabitMock).toHaveBeenCalledWith("", "Social", "1x");
  });
});
