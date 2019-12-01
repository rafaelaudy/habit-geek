import React from "react";
import { shallow } from "enzyme";
import { navigate } from "@reach/router";
import * as userService from "@rafael.audy/habit-geek-utils/services/userService";

import SignUp from "./SignUp";

let fakeEvent;

jest.mock("@reach/router", () => ({
  navigate: jest.fn()
}));

describe("SignUp component", () => {
  beforeEach(() => {
    userService.signUp = jest.fn();
    fakeEvent = {
      preventDefault: jest.fn(),
      target: { checkValidity: jest.fn().mockReturnValue(true) }
    };
  });

  it("Renders static elements", () => {
    const signUp = shallow(<SignUp />);
    expect(signUp).toMatchSnapshot();
  });

  it("If there is a jwt navigate to profile", () => {
    shallow(<SignUp jwt="jwt" />);
    expect(navigate).toHaveBeenCalledWith("/habit-geek/profile");
  });

  it("validates forms", () => {
    fakeEvent.target.checkValidity.mockReturnValueOnce(false);
    const signUp = shallow(<SignUp />);
    signUp.find("form").simulate("submit", fakeEvent);
    expect(signUp.find(".was-validated").length).toBe(1);
    expect(fakeEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(fakeEvent.target.checkValidity).toHaveBeenCalledTimes(1);
    expect(userService.signUp).toHaveBeenCalledTimes(0);
  });

  it("Saves session if login is successful", done => {
    userService.signUp.mockResolvedValueOnce();
    const saveSessionMock = jest.fn();
    const signUp = shallow(<SignUp saveSession={saveSessionMock} />);
    signUp.find("form").simulate("submit", fakeEvent);

    setImmediate(() => {
      expect(saveSessionMock).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it("Shows error if login is unsuccessful", done => {
    userService.signUp.mockRejectedValueOnce();
    const saveSessionMock = jest.fn();
    const signUp = shallow(<SignUp saveSession={saveSessionMock} />);
    signUp.find("form").simulate("submit", fakeEvent);

    setImmediate(() => {
      expect(saveSessionMock).toHaveBeenCalledTimes(0);
      done();
    });
  });
});
