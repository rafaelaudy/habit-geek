import React from "react";
import { navigate } from "@reach/router";

import { shallow } from "enzyme";
import Profile from "./Profile";

jest.mock("@reach/router", () => ({
  navigate: jest.fn()
}));

afterAll(() => {
  jest.unmock("@reach/router");
});

describe("Profile component", () => {
  it("Renders static elements", () => {
    const profile = shallow(<Profile avatar="002-woman.svg" name="rafa" />);
    expect(profile).toMatchSnapshot();
  });

  describe("on register", () => {
    it("Register and navigates to Dashboard", () => {
      const registerUserAction = jest.fn();
      const profile = shallow(<Profile registerUser={registerUserAction} />);
      profile
        .find("#profile-name")
        .simulate("change", { target: { value: "Rafa" } });
      profile
        .find(".profile__avatar")
        .at(0)
        .simulate("click");
      profile.find("button").simulate("click");

      expect(registerUserAction).toHaveBeenCalled();
      expect(registerUserAction).toHaveBeenCalledWith(
        "Rafa",
        "001-burglar.svg"
      );
      expect(navigate).toHaveBeenCalledWith("/habits");
    });
  });
});
