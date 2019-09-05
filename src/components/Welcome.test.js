import React from "react";
import { shallow } from "enzyme";
import Welcome from "./Welcome";

it("Renders Welcome", () => {
  const welcome = shallow(<Welcome />);
  expect(welcome).toMatchSnapshot();
});
