import React from "react";
import { shallow } from "enzyme";
import HabitRows from "./HabitRows";

describe("HabitRows component", () => {
  it("Renders static elements", () => {
    const habitRows = shallow(
      <HabitRows
        week="week"
        habits={[
          {
            name: "name",
            frequency: "frequency",
            checked: "checked",
            habitSucceded: "habitSucceded",
            habitFailed: "habitFailed"
          }
        ]}
        isReadOnly={false}
        toggleDayHabit={() => {}}
        onUpdateHabit={() => {}}
      />
    );
    expect(habitRows).toMatchSnapshot();
  });

  it("Hides action container when is in readonly mode and disables checkboxes", () => {
    const habitRows = shallow(<HabitRows habits={[{}]} isReadOnly={true} />);
    expect(habitRows.find("HabitRowActions").length).toBe(0);
  });

  it("Shows the correct ammount of habits", () => {
    const checked = [false, false, false, false, false, false, false];
    const habitRows = shallow(
      <HabitRows
        habits={[
          { name: "exercise", frequency: 1, checked },
          { name: "read", frequency: 1, checked }
        ]}
      />
    );
    expect(habitRows.find(".habit-row").length).toBe(2);
  });
});
