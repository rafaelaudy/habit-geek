import React from "react";
import { shallow, mount } from "enzyme";
import Dashboard from "./Dashboard";

describe("Dashboard component", () => {
  it("Renders Dashboard list", () => {
    const dashboard = shallow(<Dashboard />);
    expect(dashboard).toMatchSnapshot();
  });

  it("Creates new habit", () => {
    const dashboard = mount(<Dashboard habits={[]} />);
    dashboard.find(".btn-primary").simulate("click");
    expect(dashboard.find("#new-habit-name").length).toBe(1);
  });

  it("Updates habit", () => {
    const dashboard = mount(
      <Dashboard
        habits={[
          { name: "write", frequency: "1", type: "health", checked: [] }
        ]}
      />
    );
    dashboard.find(".habit__cell-action-container.btn").simulate("click");
    expect(dashboard.find("#new-habit-name").props().value).toBe("write");
    expect(dashboard.find("#new-habit-type").props().value).toBe("health");
    expect(dashboard.find("#new-habit-frequency").props().value).toBe("1");
  });

  it("Comes back from new/update habit", () => {
    const dashboard = mount(
      <Dashboard
        habits={[
          { name: "write", frequency: "1", type: "health", checked: [] }
        ]}
      />
    );
    dashboard.find(".btn-primary").simulate("click");
    dashboard.find(".btn-secondary").simulate("click");
    expect(dashboard.find(".habit__row").length).toBe(2);
  });
});
