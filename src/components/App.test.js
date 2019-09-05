import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("Renders static elements", () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
