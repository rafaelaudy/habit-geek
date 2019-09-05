import React from "react";
import { navigate } from "@reach/router";

import { shallow } from "enzyme";
import Welcome from "./Welcome";

jest.mock("@reach/router", () => ({
  navigate: jest.fn()
}));

afterAll(() => {
  jest.unmock("@reach/router");
});

describe("Welcome component", () => {
  it("Renders static elements", () => {
    const welcome = shallow(<Welcome />);
    expect(welcome).toMatchSnapshot();
  });

  it("Navigates to Dashboard", () => {
    const welcome = shallow(<Welcome />);
    welcome.find("button").simulate("click");
    expect(navigate).toHaveBeenCalledWith("/dashboard");
  });
});
