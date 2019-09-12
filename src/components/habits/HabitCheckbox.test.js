import React from "react";
import { shallow } from "enzyme";
import HabitCheckbox from "./HabitCheckbox";

describe("HabitCheckbox component", () => {
  it("Renders static elements", () => {
    const habitCheckbox = shallow(<HabitCheckbox />);
    expect(habitCheckbox).toMatchSnapshot();
  });

  it("renders checked checkboxes", () => {
    const habitCheckbox = shallow(<HabitCheckbox isChecked={true} />);
    expect(habitCheckbox).toMatchSnapshot();
  });

  it("Toggles the checkbox", () => {
    const clickHandlerMock = jest.fn();
    const dashboard = shallow(
      <HabitCheckbox clickHandler={clickHandlerMock} />
    );
    dashboard.find("input").simulate("click");
    expect(clickHandlerMock).toHaveBeenCalledTimes(1);
  });
});
