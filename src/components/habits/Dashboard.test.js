import React from "react";
import { shallow } from "enzyme";
import Dashboard from "./Dashboard";

describe("Dashboard component", () => {
  it("Renders static elements", () => {
    const dashboard = shallow(<Dashboard username="rafa" habits={[]} />);
    expect(dashboard).toMatchSnapshot();
  });

  it("Shows the correct ammount of habits", () => {
    const checked = [false, false, false, false, false, false, false];
    const dashboard = shallow(
      <Dashboard
        habits={[{ name: "exercise", checked }, { name: "read", checked }]}
      />
    );
    expect(dashboard).toMatchSnapshot();
  });

  it("starts to create a habit", () => {
    const startHabitCreationMock = jest.fn();
    const dashboard = shallow(
      <Dashboard
        username="rafa"
        habits={[]}
        startHabitCreation={startHabitCreationMock}
      />
    );
    dashboard.find("button").simulate("click");
    expect(startHabitCreationMock).toHaveBeenCalledTimes(1);
  });
});
