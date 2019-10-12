import React from "react";
import { shallow } from "enzyme";
import Layout from "./Layout";

describe("Layout component", () => {
  it("Renders static elements", () => {
    const layout = shallow(<Layout />);
    expect(layout).toMatchSnapshot();
  });
});
