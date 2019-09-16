import { getCurrentWeek } from "./dateUtils";

describe("DashboardRows component", () => {
  const RealDate = Date;

  beforeEach(() => {
    global.Date.prototype.getFullYear = () => 2019;
  });

  afterEach(() => {
    global.Date = RealDate;
  });

  it("used current date if one is not provided", () => {
    expect(getCurrentWeek()).toContain("y2019");
  });

  it("calculates the week correctly", () => {
    expect(getCurrentWeek(new Date("2019-01-12T12:34:56z"))).toBe("y2019w2");
  });

  it("considers sunday as the last day of the week", () => {
    expect(getCurrentWeek(new Date("2019-01-13T12:34:56z"))).toBe("y2019w3");
  });
});
