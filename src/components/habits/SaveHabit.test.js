import React from "react";
import { shallow } from "enzyme";
import SaveHabit from "./SaveHabit";

let saveHabitMock;
let goBackMock;

describe("SaveHabit component", () => {
  beforeEach(() => {
    saveHabitMock = jest.fn();
    goBackMock = jest.fn();
  });

  it("Renders static elements", () => {
    const saveHabits = shallow(
      <SaveHabit name="name" frequency="frequency" type="1"></SaveHabit>
    );
    expect(saveHabits).toMatchSnapshot();
  });

  it("creates a habit", () => {
    const saveHabits = shallow(
      <SaveHabit saveHabit={saveHabitMock} goBack={goBackMock}></SaveHabit>
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
    expect(saveHabitMock).toHaveBeenCalledWith(
      undefined,
      "Read",
      "Social",
      "1x"
    );
    expect(goBackMock).toBeCalled();
  });

  it("updates a habit", () => {
    const saveHabits = shallow(
      <SaveHabit
        id="read"
        saveHabit={saveHabitMock}
        goBack={goBackMock}
      ></SaveHabit>
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
    expect(saveHabitMock).toHaveBeenCalledWith("read", "Read", "Social", "1x");
    expect(goBackMock).toBeCalled();
  });

  it("selects change on blur for accessibility", () => {
    const saveHabits = shallow(
      <SaveHabit saveHabit={saveHabitMock} goBack={goBackMock}></SaveHabit>
    );
    saveHabits
      .find("#new-habit-type")
      .simulate("blur", { target: { value: "Social" } });
    saveHabits
      .find("#new-habit-frequency")
      .simulate("blur", { target: { value: "1x" } });
    saveHabits.find(".btn-primary").simulate("click");
    expect(saveHabitMock).toHaveBeenCalledWith(undefined, "", "Social", "1x");
  });

  it("cancels habit creation", () => {
    const saveHabits = shallow(<SaveHabit goBack={goBackMock}></SaveHabit>);
    saveHabits.find(".btn-secondary").simulate("click");
    expect(goBackMock).toHaveBeenCalled();
  });
});
