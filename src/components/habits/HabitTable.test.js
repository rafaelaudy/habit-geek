import React from "react";
import { shallow } from "enzyme";
import HabitTable from "./HabitTable";

describe("HabitTable component", () => {
  it("Renders static elements", () => {
    const habitTable = shallow(<HabitTable />);
    expect(habitTable).toMatchSnapshot();
  });
});
