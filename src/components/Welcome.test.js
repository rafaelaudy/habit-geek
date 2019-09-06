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

  describe("on register", () => {
    it("Register and navigates to Dashboard", () => {
      const registerUserAction = jest.fn();
      const welcome = shallow(<Welcome registerUser={registerUserAction} />);
      welcome.find("#Name").simulate("change", { target: { value: "Rafa" } });
      welcome
        .find(".welcome__avatar")
        .at(0)
        .simulate("click");
      welcome.find("button").simulate("click");

      expect(registerUserAction).toHaveBeenCalled();
      expect(registerUserAction).toHaveBeenCalledWith(
        "Rafa",
        "001-burglar.svg"
      );
      expect(navigate).toHaveBeenCalledWith("/dashboard");
    });
  });
});
