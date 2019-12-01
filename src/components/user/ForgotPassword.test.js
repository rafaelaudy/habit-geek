import React from "react";
import { shallow } from "enzyme";
import ForgotPassword from "./ForgotPassword";
import * as userService from "@rafael.audy/habit-geek-utils/services/userService";

let fakeEvent;

describe("ForgotPassword component", () => {
  beforeEach(() => {
    userService.forgotPassword = jest.fn();
    fakeEvent = {
      preventDefault: jest.fn(),
      target: { checkValidity: jest.fn().mockReturnValue(true) }
    };
  });

  it("Renders forgot password", () => {
    const forgotPassword = shallow(<ForgotPassword />);
    expect(forgotPassword).toMatchSnapshot();
  });

  it("validates forms", () => {
    fakeEvent.target.checkValidity.mockReturnValueOnce(false);
    const forgotPassword = shallow(<ForgotPassword />);
    forgotPassword.find("form").simulate("submit", fakeEvent);
    expect(forgotPassword.find(".was-validated").length).toBe(1);
    expect(fakeEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(fakeEvent.target.checkValidity).toHaveBeenCalledTimes(1);
    expect(userService.forgotPassword).toHaveBeenCalledTimes(0);
  });

  it("Renders send again message", done => {
    userService.forgotPassword.mockResolvedValueOnce();
    const forgotPassword = shallow(<ForgotPassword />);
    forgotPassword.find("form").simulate("submit", fakeEvent);

    setImmediate(() => {
      expect(forgotPassword).toMatchSnapshot();
      done();
    });
  });

  it("Renders error message", done => {
    userService.forgotPassword.mockRejectedValueOnce();
    const forgotPassword = shallow(<ForgotPassword />);
    forgotPassword.find("form").simulate("submit", fakeEvent);

    setImmediate(() => {
      expect(forgotPassword).toMatchSnapshot();
      done();
    });
  });
});
