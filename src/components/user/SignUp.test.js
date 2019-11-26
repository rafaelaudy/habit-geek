import React from "react";
import { shallow } from "enzyme";
import SignUp from "./SignUp";

//TODO
describe("SignUp component", () => {
  it("Renders static elements", () => {
    const signUp = shallow(<SignUp />);
    expect(signUp).toMatchSnapshot();
  });
});
