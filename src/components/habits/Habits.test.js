import React from "react";
import { shallow } from "enzyme";
import Habits from "./Habits";

describe("Habits component", () => {
  it("Renders Habits list", () => {
    const habits = shallow(<Habits isCreatingHabit={false} />);
    expect(habits).toMatchSnapshot();
  });

  it("Renders new Habit to create a new one", () => {
    const habits = shallow(<Habits isCreatingHabit={true} />);
    expect(habits).toMatchSnapshot();
  });
});
