import React from "react";
import { shallow } from "enzyme";
import ForgotPassword from "./ForgotPassword";

//TODO
describe("ForgotPassword component", () => {
  it("Renders static elements", () => {
    const forgotPassword = shallow(<ForgotPassword />);
    expect(forgotPassword).toMatchSnapshot();
  });
});
