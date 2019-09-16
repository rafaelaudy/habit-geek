import { getCurrentWeek } from "./dateUtils";

describe("DashboardRows component", () => {
  it("calculates the week correctly", () => {
    expect(getCurrentWeek(new Date("2019-01-12T12:34:56z"))).toBe("y2019w2");
  });

  it("considers sunday as the last day of the week", () => {
    expect(getCurrentWeek(new Date("2019-01-13T12:34:56z"))).toBe("y2019w3");
  });
});
