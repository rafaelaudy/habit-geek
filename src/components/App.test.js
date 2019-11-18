import React from "react";
import { shallow } from "enzyme";
import App from "./App";

jest.mock("@rafael.audy/habit-geek-utils/utils/dateUtils", () => ({
  getCurrentWeek: jest.fn().mockReturnValue("y1w1")
}));

describe("App component", () => {
  it("Renders static elements", () => {
    const app = shallow(<App currentWeek="y1w1" updateCurrentWeekStatuses={()=>{}}/>);
    expect(app).toMatchSnapshot();
  });

  it("starts a new week when the current date is different then what was stored", () => {
    const startNewWeekMock = jest.fn();
    shallow(<App currentWeek="y1w0" startNewWeek={startNewWeekMock} />);
    expect(startNewWeekMock).toHaveBeenCalled();
  });

  it("updates current week statuses", () => {
    const updateCurrentWeekStatusesMock = jest.fn();
    shallow(<App currentWeek="y1w1" updateCurrentWeekStatuses={updateCurrentWeekStatusesMock} />);
    expect(updateCurrentWeekStatusesMock).toHaveBeenCalled();
  });
});
