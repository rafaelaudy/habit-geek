import React from "react";
import { shallow, mount } from "enzyme";
import DashboardView from "./DashboardView";

const props = {
  username: "username",
  currentHabits: [
    { name: "write", frequency: "1", type: "health", checked: [] }
  ],
  previousHabits: [],
  currentWeek: "y1w1",
  previousWeek: "y1w0",
  onAddNewHabit: () => {},
  onUpdateHabit: () => {},
  toggleDayHabit: () => {}
};

describe("DashboardView component", () => {
  it("Renders static elements", () => {
    const dashboardView = shallow(<DashboardView {...props} />);
    expect(dashboardView).toMatchSnapshot();
  });

  it("Doesn't show username is none is provided", () => {
    const dashboardView = shallow(<DashboardView {...props} username="" />);
    expect(dashboardView.find("h2")).toMatchSnapshot();
  });

  it("Doesn't show the add button on previous weeks", () => {
    const dashboardView = mount(<DashboardView {...props} username="" />);
    dashboardView
      .find("button")
      .at(0)
      .simulate("click");
    expect(dashboardView.find(".btn-primary").length).toBe(0);
  });

  it("starts to create a habit", () => {
    const onAddNewHabitMock = jest.fn();
    const dashboardView = shallow(
      <DashboardView {...props} onAddNewHabit={onAddNewHabitMock} />
    );
    dashboardView.find(".btn-primary").simulate("click");
    expect(onAddNewHabitMock).toHaveBeenCalledTimes(1);
  });
});
