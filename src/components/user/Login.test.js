import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

//TODO
describe("Login component", () => {
  it("Renders static elements", () => {
    const login = shallow(<Login />);
    expect(login).toMatchSnapshot();
  });
});
