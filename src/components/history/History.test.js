import React from "react";
import { shallow } from "enzyme";
import History from "./History";

describe("History component", () => {
  it("Renders static elements", () => {
    const history = shallow(<History />);
    expect(history).toMatchSnapshot();
  });
});
