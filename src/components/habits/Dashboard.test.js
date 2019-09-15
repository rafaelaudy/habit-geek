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
        habits={[
          { name: "exercise", frequency: 1, checked },
          { name: "read", frequency: 1, checked }
        ]}
      />
    );
    expect(dashboard).toMatchSnapshot();
  });

  it("starts to create a habit", () => {
    const toggleIsCreatingHabitMock = jest.fn();
    const dashboard = shallow(
      <Dashboard
        username="rafa"
        habits={[]}
        toggleIsCreatingHabit={toggleIsCreatingHabitMock}
      />
    );
    dashboard.find("button").simulate("click");
    expect(toggleIsCreatingHabitMock).toHaveBeenCalledTimes(1);
  });
});
