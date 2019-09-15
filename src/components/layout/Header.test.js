import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header component", () => {
  it("Renders static elements", () => {
    const header = shallow(<Header />);
    expect(header).toMatchSnapshot();
  });
});
