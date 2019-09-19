import React from "react";
import { shallow } from "enzyme";
import HabitHeader from "./HabitHeader";

describe("HabitHeader component", () => {
  it("Renders static elements", () => {
    const habitHeader = shallow(<HabitHeader />);
    expect(habitHeader.find(".habit__cell-action-container").length).toBe(1);
    expect(habitHeader).toMatchSnapshot();
  });

  it("Hides header placeholder when on readonly mode", () => {
    const habitHeader = shallow(<HabitHeader isReadOnly={true} />);
    expect(habitHeader.find(".habit__cell-action-container").length).toBe(0);
  });
});
