import React from "react";
import { navigate } from "@reach/router";
import { shallow } from "enzyme";

import Profile from "./Profile";

let fakeEvent;

jest.mock("@reach/router", () => ({
  navigate: jest.fn()
}));

describe("Profile component", () => {
  afterAll(() => {
    jest.unmock("@reach/router");
  });

  beforeEach(() => {
    jest.clearAllMocks();
    fakeEvent = {
      preventDefault: jest.fn(),
      target: { checkValidity: jest.fn().mockReturnValue(true) }
    };
  });

  it("Renders static elements", () => {
    const profile = shallow(<Profile avatar="002-woman.svg" name="rafa" />);
    expect(profile).toMatchSnapshot();
  });

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
    profile.find("form").simulate("submit", fakeEvent);
    expect(registerUserAction).toHaveBeenCalled();
    expect(registerUserAction).toHaveBeenCalledWith("Rafa", "001-burglar.svg");
    expect(navigate).toHaveBeenCalledWith("/habits");
  });

  it("validates forms", () => {
    const registerUserAction = jest.fn();
    fakeEvent.target.checkValidity.mockReturnValueOnce(false);
    const profile = shallow(<Profile registerUser={registerUserAction} />);
    profile.find("form").simulate("submit", fakeEvent);
    expect(profile.find(".was-validated").length).toBe(1);
    expect(fakeEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(fakeEvent.target.checkValidity).toHaveBeenCalledTimes(1);
    expect(registerUserAction).toHaveBeenCalledTimes(0);
    expect(navigate).toHaveBeenCalledTimes(0);
  });
});
