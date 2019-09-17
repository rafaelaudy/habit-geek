import React from "react";
import { shallow } from "enzyme";
import History from "./History";

describe("History component", () => {
  it("Renders static elements", () => {
    const weeks = [
      { week: "y1w1", habits: [{}] },
      { week: "y1w2", habits: [{}] }
    ];

    const history = shallow(<History weeks={weeks} />);
    expect(history).toMatchSnapshot();
  });
});
