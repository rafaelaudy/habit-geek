import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";

describe("Dashboard component", () => {
  it("Renders static elements", () => {
    const dashboard = shallow(<Dashboard />);
    expect(dashboard).toMatchSnapshot();
  });
});
