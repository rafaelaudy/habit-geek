import React from "react";
import { shallow } from "enzyme";
import UserForm from "./UserForm";

//TODO
describe("UserForm component", () => {
  it("Renders static elements", () => {
    const userForm = shallow(<UserForm />);
    expect(userForm).toMatchSnapshot();
  });
});
