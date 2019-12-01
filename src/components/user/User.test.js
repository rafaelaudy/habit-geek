import React from "react";
import { shallow } from "enzyme";
import User from "./User";

describe("User component", () => {
  it("Renders the profile component", () => {
    const user = shallow(<User jwt="jwt" />);
    expect(user).toMatchSnapshot();
  });

  it("Renders the login component", () => {
    const user = shallow(<User />);
    expect(user).toMatchSnapshot();
  });
});
