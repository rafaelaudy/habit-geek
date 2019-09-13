import React from "react";
import { shallow, mount } from "enzyme";
import DashboardRows from "./DashboardRows";

describe("DashboardRows component", () => {
  const RealDate = Date;

  function mockDate(isoDate) {
    global.Date = class extends RealDate {
      constructor() {
        return new RealDate(isoDate);
      }
    };
  }

  afterEach(() => {
    global.Date = RealDate;
  });

  it("Renders static elements", () => {
    const dashboardRows = shallow(
      <DashboardRows username="rafa" habits={[]} />
    );
    expect(dashboardRows).toMatchSnapshot();
  });

  it("Shows the correct ammount of habits", () => {
    const checked = [false, false, false, false, false, false, false];
    const dashboardRows = shallow(
      <DashboardRows
        habits={[
          { name: "exercise", frequency: 1, checked },
          { name: "read", frequency: 1, checked }
        ]}
      />
    );
    expect(dashboardRows).toMatchSnapshot();
  });

  it("marks habits that are not performing well", () => {
    mockDate("2019-09-12T12:34:56z");
    const checked = [true, true, false, false, false, false, false];
    const dashboardRows = shallow(
      <DashboardRows
        habits={[
          { name: "ok", frequency: 6, checked },
          { name: "failed", frequency: 7, checked }
        ]}
      />
    );
    expect(dashboardRows).toMatchSnapshot();
  });

  it("marks habits correctly at the last day of the week", () => {
    mockDate("2019-09-15T12:34:56z");
    const checked = [true, true, true, true, true, false, false];
    const dashboardRows = shallow(
      <DashboardRows
        habits={[
          { name: "ok", frequency: 6, checked },
          { name: "failed", frequency: 7, checked }
        ]}
      />
    );
    expect(dashboardRows).toMatchSnapshot();
  });

  it("marks habits that are completed for that week", () => {
    mockDate("2019-09-12T12:34:56z");
    const checked = [true, true, false, false, false, false, false];
    const dashboardRows = shallow(
      <DashboardRows
        habits={[
          { name: "ok", frequency: 3, checked },
          { name: "failed", frequency: 2, checked }
        ]}
      />
    );
    expect(dashboardRows).toMatchSnapshot();
  });

  it("toggles habits", () => {
    const toggleDayHabitMock = jest.fn();
    const dashboardRows = mount(
      <DashboardRows
        habits={[
          {
            name: "ok",
            frequency: 3,
            checked: [true, true, false, false, false, false, false]
          }
        ]}
        toggleDayHabit={toggleDayHabitMock}
      />
    );
    dashboardRows
      .find("input")
      .at(0)
      .simulate("click");
    expect(toggleDayHabitMock).toHaveBeenCalledTimes(1);
  });
});
