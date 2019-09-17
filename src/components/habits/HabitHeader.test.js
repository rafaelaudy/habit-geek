import React from "react";
import { shallow } from "enzyme";
import HabitHeader from "./HabitHeader";

describe("HabitHeader component", () => {
  it("Renders static elements", () => {
    const habitHeader = shallow(<HabitHeader />);
    expect(habitHeader).toMatchSnapshot();
  });
});
