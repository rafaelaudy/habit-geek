import React from "react";
import { mount } from "enzyme";
import Header from "./Header";

describe("Header component", () => {
  it("Renders static elements", () => {
    const header = mount(<Header />);
    expect(header).toMatchSnapshot();
  });

  it("Changes login to profile when jwt is present", () => {
    const header = mount(<Header jwt={"jwt"} />);
    expect(header).toMatchSnapshot();
  });
});
