import React from "react";
import { shallow } from "enzyme";
import SaveHabit from "./SaveHabit";

describe("SaveHabit component", () => {
  it("Renders static elements", () => {
    const saveHabits = shallow(<SaveHabit></SaveHabit>);
    expect(saveHabits).toMatchSnapshot();
  });

  it("creates a habit", () => {
    const createHabitMock = jest.fn();
    const saveHabits = shallow(
      <SaveHabit createHabit={createHabitMock}></SaveHabit>
    );
    saveHabits
      .find("#new-habit-name")
      .simulate("change", { target: { value: "Read" } });
    saveHabits
      .find("#new-habit-type")
      .simulate("change", { target: { value: "Social" } });
    saveHabits
      .find("#new-habit-frequency")
      .simulate("change", { target: { value: "1x" } });
    saveHabits.find(".btn-primary").simulate("click");
    expect(createHabitMock).toHaveBeenCalledWith("Read", "Social", "1x");
  });

  it("selects change on blur for accessibility", () => {
    const createHabitMock = jest.fn();
    const saveHabits = shallow(
      <SaveHabit createHabit={createHabitMock}></SaveHabit>
    );
    saveHabits
      .find("#new-habit-type")
      .simulate("blur", { target: { value: "Social" } });
    saveHabits
      .find("#new-habit-frequency")
      .simulate("blur", { target: { value: "1x" } });
    saveHabits.find(".btn-primary").simulate("click");
    expect(createHabitMock).toHaveBeenCalledWith("", "Social", "1x");
  });

  it("cancels habit creation", () => {
    const toggleIsCreatingHabitMock = jest.fn();
    const saveHabits = shallow(
      <SaveHabit toggleIsCreatingHabit={toggleIsCreatingHabitMock}></SaveHabit>
    );
    saveHabits.find(".btn-secondary").simulate("click");
    expect(toggleIsCreatingHabitMock).toHaveBeenCalled();
  });
});
