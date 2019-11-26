import React from "react";
import { shallow } from "enzyme";
import User from "./User";

//TODO
describe("User component", () => {
  it("Renders static elements", () => {
    const user = shallow(<User />);
    expect(user).toMatchSnapshot();
  });
});
