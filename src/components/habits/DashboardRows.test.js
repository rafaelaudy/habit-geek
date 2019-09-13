import React from "react";
import { shallow } from "enzyme";
import DashboardRows from "./DashboardRows";

describe("DashboardRows component", () => {
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
});
