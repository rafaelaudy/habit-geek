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
    newHabits.find(".btn-primary").simulate("click");
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
    newHabits.find(".btn-primary").simulate("click");
    expect(createHabitMock).toHaveBeenCalledWith("", "Social", "1x");
  });

  it("cancels habit creation", () => {
    const toggleIsCreatingHabitMock = jest.fn();
    const newHabits = shallow(
      <NewHabit toggleIsCreatingHabit={toggleIsCreatingHabitMock}></NewHabit>
    );
    newHabits.find(".btn-secondary").simulate("click");
    expect(toggleIsCreatingHabitMock).toHaveBeenCalled();
  });
});
