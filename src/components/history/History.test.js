import React from "react";
import { shallow } from "enzyme";
import History from "./History";

jest.mock("@rafael.audy/habit-geek-utils/utils/dateUtils.js", () => ({
  getWeekIntervalText: jest.fn().mockReturnValue("week 1: 30/Sep ... 6/Oct"),
}));

describe("History component", () => {
  it("Renders static elements", () => {
    const weeks = [
      { week: "y1w1", habits: [{}] },
      { week: "y1w2", habits: [{}] }
    ];

    const history = shallow(<History weeks={weeks} />);
    expect(history).toMatchSnapshot();
  });

  it("Don't show anything if historical weeks are empty", () => {
    const weeks = [];
    const history = shallow(<History weeks={weeks} />);
    expect(history).toMatchSnapshot();
  });

  it("shows and collapses week informations", () => {
    const weeks = [
      { week: "y1w1", habits: [{}] },
      { week: "y1w2", habits: [{}] }
    ];

    const history = shallow(<History weeks={weeks} />);
    expect(history.find(".show").length).toBe(1);
    history
      .find(".history__header-button")
      .at(1)
      .simulate("click");
    expect(history.find(".show").length).toBe(2);
    history
      .find(".history__header-button")
      .at(0)
      .simulate("click");
    expect(history.find(".show").length).toBe(1);
  });
});
