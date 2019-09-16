import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  it("Renders static elements", () => {
    const app = shallow(<App startNewWeek={() => {}} />);
    expect(app).toMatchSnapshot();
  });

  it("starts a new week when the current date is different then what was stored", () => {
    const startNewWeekMock = jest.fn();
    shallow(<App currentWeek="y1w1" startNewWeek={startNewWeekMock} />);
    expect(startNewWeekMock).toHaveBeenCalled();
  });
});
