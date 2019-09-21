import React from "react";
import { shallow } from "enzyme";
import SaveHabit from "./SaveHabit";

let fakeEvent;
let saveHabitMock;
let deleteHabitMock;
let goBackMock;

describe("SaveHabit component", () => {
  beforeEach(() => {
    saveHabitMock = jest.fn();
    deleteHabitMock = jest.fn();
    goBackMock = jest.fn();
    fakeEvent = {
      preventDefault: jest.fn(),
      target: { checkValidity: jest.fn().mockReturnValue(true) }
    };
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
    saveHabits.find("form").simulate("submit", fakeEvent);
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
    saveHabits.find("form").simulate("submit", fakeEvent);
    expect(saveHabitMock).toHaveBeenCalledWith("read", "Read", "Social", "1x");
    expect(goBackMock).toBeCalled();
  });

  it("validates forms", () => {
    const saveHabit = shallow(
      <SaveHabit saveHabit={saveHabitMock} goBack={goBackMock}></SaveHabit>
    );
    fakeEvent.target.checkValidity.mockReturnValueOnce(false);
    saveHabit.find("form").simulate("submit", fakeEvent);
    expect(saveHabit.find(".was-validated").length).toBe(1);
    expect(fakeEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(fakeEvent.target.checkValidity).toHaveBeenCalledTimes(1);
    expect(saveHabitMock).toHaveBeenCalledTimes(0);
    expect(goBackMock).toHaveBeenCalledTimes(0);
  });

  it("deletes a habit", () => {
    const saveHabits = shallow(
      <SaveHabit
        id="read"
        deleteHabit={deleteHabitMock}
        goBack={goBackMock}
      ></SaveHabit>
    );
    saveHabits.find(".btn-danger").simulate("click");
    expect(deleteHabitMock).toHaveBeenCalledWith("read");
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
    saveHabits.find("form").simulate("submit", fakeEvent);
    expect(saveHabitMock).toHaveBeenCalledWith(undefined, "", "Social", "1x");
  });

  it("cancels habit creation", () => {
    const saveHabits = shallow(<SaveHabit goBack={goBackMock}></SaveHabit>);
    saveHabits.find(".btn-secondary").simulate("click");
    expect(goBackMock).toHaveBeenCalled();
  });
});
