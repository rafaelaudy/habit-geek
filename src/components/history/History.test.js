import React from "react";
import { shallow } from "enzyme";
import History from "./History";

jest.mock("../../utils/dateUtils.js", () => ({
  getCurrentWeek: jest.fn().mockReturnValue("y1w1")
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
