import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";

describe("Dashboard component", () => {
  it("Renders Dashboard list", () => {
    const dashboard = shallow(<Dashboard isCreatingHabit={false} />);
    expect(dashboard).toMatchSnapshot();
  });

  it("Renders new Habit to create a new one", () => {
    const dashboard = shallow(<Dashboard isCreatingHabit={true} />);
    expect(dashboard).toMatchSnapshot();
  });
});
