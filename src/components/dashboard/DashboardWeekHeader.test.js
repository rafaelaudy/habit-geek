import React from "react";
import { shallow } from "enzyme";
import DashboardWeekHeader from "./DashboardWeekHeader";

const props = {
  week: "y1w1",
  isCurrentWeek: true,
  hasPreviousWeek: true,
  toggleWeek: () => {}
};

describe("DashboardWeekHeader component", () => {
  it("Renders static elements", () => {
    const dashboardWeekHeader = shallow(<DashboardWeekHeader {...props} />);
    expect(dashboardWeekHeader).toMatchSnapshot();
  });

  it("doesn't show buttons to change week when there are no previous weeks", () => {
    const dashboardWeekHeader = shallow(
      <DashboardWeekHeader {...props} hasPreviousWeek={false} />
    );
    expect(dashboardWeekHeader).toMatchSnapshot();
  });

  it("toggles the selected week", () => {
    const toggleWeekMock = jest.fn();
    const dashboardWeekHeader = shallow(
      <DashboardWeekHeader
        {...props}
        isCurrentWeek={false}
        toggleWeek={toggleWeekMock}
      />
    );
    dashboardWeekHeader
      .find("button")
      .at(0)
      .simulate("click");
    expect(toggleWeekMock).toHaveBeenCalledWith(true);
    expect(dashboardWeekHeader).toMatchSnapshot();
  });
});
