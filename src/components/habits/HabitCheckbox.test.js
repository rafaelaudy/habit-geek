import React from "react";
import { shallow } from "enzyme";
import HabitCheckbox from "./HabitCheckbox";

describe("HabitCheckbox component", () => {
  it("renders static elements", () => {
    const habitCheckbox = shallow(<HabitCheckbox />);
    expect(habitCheckbox).toMatchSnapshot();
  });

  it("renders checked checkboxes", () => {
    const habitCheckbox = shallow(<HabitCheckbox isChecked={true} />);
    expect(habitCheckbox).toMatchSnapshot();
  });

  it("toggles the checkbox", () => {
    const clickHandlerMock = jest.fn();
    const dashboard = shallow(
      <HabitCheckbox clickHandler={clickHandlerMock} />
    );
    dashboard.find("input").simulate("change");
    expect(clickHandlerMock).toHaveBeenCalledTimes(1);
  });

  it("disables component", () => {
    const habitCheckbox = shallow(
      <HabitCheckbox isChecked={true} isDisabled={true} />
    );
    expect(habitCheckbox).toMatchSnapshot();
  });

  it("only disables component if it is not readonly", () => {
    const habitCheckbox = shallow(
      <HabitCheckbox isChecked={true} isDisabled={true} isReadOnly={true} />
    );
    expect(habitCheckbox).toMatchSnapshot();
  });
});
