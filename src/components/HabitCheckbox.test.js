import React from "react";
import { shallow } from "enzyme";
import HabitCheckbox from "./HabitCheckbox";

describe("HabitCheckbox component", () => {
  it("Renders static elements", () => {
    const habitCheckbox = shallow(<HabitCheckbox />);
    expect(habitCheckbox).toMatchSnapshot();
  });
});
