import React from "react";
import { shallow } from "enzyme";
import DashboardView from "./DashboardView";

describe("DashboardView component", () => {
  it("Renders static elements", () => {
    const dashboardView = shallow(
      <DashboardView username="rafa" habits={[{}, {}]} />
    );
    expect(dashboardView).toMatchSnapshot();
  });

  it("Don't show habits if none are stored", () => {
    const dashboardView = shallow(
      <DashboardView username="rafa" habits={[]} />
    );
    expect(dashboardView.find("HabitTable").length).toBe(0);
  });

  it("Don't show username is none is provided", () => {
    const dashboardView = shallow(<DashboardView habits={[]} />);
    expect(dashboardView).toMatchSnapshot();
  });

  it("starts to create a habit", () => {
    const addNewHabitMock = jest.fn();
    const dashboardView = shallow(
      <DashboardView
        username="rafa"
        habits={[]}
        addNewHabit={addNewHabitMock}
      />
    );
    dashboardView.find(".btn-primary").simulate("click");
    expect(addNewHabitMock).toHaveBeenCalledTimes(1);
  });
});
