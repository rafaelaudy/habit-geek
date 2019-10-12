import React from "react";
import { shallow } from "enzyme";
import HabitTable from "./HabitTable";

describe("HabitTable component", () => {
  it("Renders static elements", () => {
    const habitTable = shallow(
      <HabitTable
        week="y1w1"
        habits={[{}, {}]}
        isReadOnly={true}
        toggleDayHabit={() => {}}
        onUpdateHabit={() => {}}
      />
    );
    expect(habitTable).toMatchSnapshot();
  });

  it("Returns null if no habits is passed", () => {
    const habitTable = shallow(
      <HabitTable
        habits={[]}
        isReadOnly={true}
        toggleDayHabit={() => {}}
        onUpdateHabit={() => {}}
      />
    );
    expect(habitTable.type()).toBe(null);
  });
});
