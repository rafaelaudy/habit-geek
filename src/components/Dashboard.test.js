import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";

describe("Dashboard component", () => {
  it("Renders static elements", () => {
    const dashboard = shallow(<Dashboard habits={[]} />);
    expect(dashboard).toMatchSnapshot();
  });

  it("Shows the correct ammount of habits", () => {
    const dashboard = shallow(<Dashboard habits={["exercise", "read"]} />);
    expect(dashboard).toMatchSnapshot();
  });
});
