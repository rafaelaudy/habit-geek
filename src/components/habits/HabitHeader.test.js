import React from "react";
import { shallow } from "enzyme";
import HabitHeader from "./HabitHeader";
import { isToday } from "@rafael.audy/habit-geek-utils/utils/dateUtils";

jest.mock("@rafael.audy/habit-geek-utils/utils/dateUtils", () => ({
  isToday: jest.fn().mockReturnValue(false)
}));

describe("HabitHeader component", () => {
  it("Renders static elements", () => {
    const habitHeader = shallow(<HabitHeader />);
    expect(habitHeader.find(".icon-button").length).toBe(1);
    expect(habitHeader).toMatchSnapshot();
  });

  it("Hides header placeholder when on readonly mode", () => {
    const habitHeader = shallow(<HabitHeader isReadOnly={true} />);
    expect(habitHeader.find(".icon-button").length).toBe(0);
  });

  it("Shows border around current date", () => {
    isToday.mockReturnValueOnce(true);
    const habitHeader = shallow(<HabitHeader />);
    expect(
      habitHeader.find(".habit-row-frequency__cell--today-header").length
    ).toBe(1);
  });
});
