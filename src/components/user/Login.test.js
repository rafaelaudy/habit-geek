import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import * as userService from "@rafael.audy/habit-geek-utils/services/userService";

let fakeEvent;

describe("Login component", () => {
  beforeEach(() => {
    userService.login = jest.fn();
    fakeEvent = {
      preventDefault: jest.fn(),
      target: { checkValidity: jest.fn().mockReturnValue(true) }
    };
  });

  it("Renders static elements", () => {
    const login = shallow(<Login />);
    expect(login).toMatchSnapshot();
  });

  it("validates forms", () => {
    fakeEvent.target.checkValidity.mockReturnValueOnce(false);
    const login = shallow(<Login />);
    login.find("form").simulate("submit", fakeEvent);
    expect(login.find(".was-validated").length).toBe(1);
    expect(fakeEvent.preventDefault).toHaveBeenCalledTimes(1);
    expect(fakeEvent.target.checkValidity).toHaveBeenCalledTimes(1);
    expect(userService.login).toHaveBeenCalledTimes(0);
  });

  it("Saves session if login is successful", done => {
    userService.login.mockResolvedValueOnce();
    const saveSessionMock = jest.fn();
    const login = shallow(<Login saveSession={saveSessionMock} />);
    login.find("form").simulate("submit", fakeEvent);

    setImmediate(() => {
      expect(saveSessionMock).toHaveBeenCalledTimes(1);
      done();
    });
  });

  it("Shows error if login is unsuccessful", done => {
    userService.login.mockRejectedValueOnce();
    const saveSessionMock = jest.fn();
    const login = shallow(<Login saveSession={saveSessionMock} />);
    login.find("form").simulate("submit", fakeEvent);

    setImmediate(() => {
      expect(saveSessionMock).toHaveBeenCalledTimes(0);
      done();
    });
  });
});
