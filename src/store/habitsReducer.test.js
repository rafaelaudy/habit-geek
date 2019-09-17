import habitsReducer from "./habitsReducer";
import {
  createHabit,
  toggleIsCreatingHabit,
  toggleDayHabit,
  startNewWeek
} from "../actions/habitActions";

jest.mock("../utils/dateUtils", () => ({
  getCurrentWeek: jest.fn().mockReturnValue("y1w1"),
  getTodayIndex: jest.fn().mockReturnValue("1")
}));

describe("habitsReducer - start new week", () => {
  it("starts a new week", () => {
    const initialState = {
      weeks: {
        y1w0: {
          drive: {
            checked: [false, false, true, false, false, false, false],
            frequency: "1x",
            name: "read",
            type: "hobby"
          },
          read: {
            checked: [false, true, false, true, false, false, false],
            frequency: "1x",
            name: "read",
            type: "hobby"
          }
        }
      },
      currentWeek: "y1w0",
      isCreatingHabit: false
    };
    const state = habitsReducer(initialState, startNewWeek());
    expect(state.isCreatingHabit).toEqual(false);
    expect(state.currentWeek).toEqual("y1w1");
    expect(state.weeks).toEqual({
      ...initialState.weeks,
      y1w1: {
        drive: {
          ...initialState.weeks.y1w0.drive,
          checked: [false, false, false, false, false, false, false]
        },
        read: {
          ...initialState.weeks.y1w0.read,
          checked: [false, false, false, false, false, false, false]
        }
      }
    });
  });

  it.skip("creates empty weeks for the weeks between the last week and the new week", () => {
    expect(true).toBe(false);
  });

  it.skip("adds habitSucced and habitFailure flags for the weeks between the last week and the new week", () => {
    expect(true).toBe(false);
  });
});

describe("habitsReducer - toggles a habit", () => {
  it("toggles a habit", () => {
    let state = habitsReducer(undefined, createHabit("read", "hobby", "1x"));
    state = habitsReducer(state, toggleDayHabit("read", 1));
    expect(state.isCreatingHabit).toEqual(false);
    expect(state.currentWeek).toEqual("y1w1");
    expect(state.weeks).toEqual({
      y1w1: {
        read: {
          checked: [false, true, false, false, false, false, false],
          frequency: "1x",
          name: "read",
          type: "hobby",
          habitFailed: false,
          habitSucceded: false
        }
      }
    });
  });

  it.skip("marks habits that are completed for that week", () => {});

  it.skip("marks habits that have failed for that week", () => {});

  it.skip("marks habits correctly at the last day of the week", () => {});
});

describe("habitsReducer", () => {
  it("creates a habit", () => {
    const state = habitsReducer(undefined, createHabit("read", "hobby", "1x"));
    expect(state.isCreatingHabit).toEqual(false);
    expect(state.currentWeek).toEqual("y1w1");
    expect(state.weeks).toEqual({
      y1w1: {
        read: {
          checked: [false, false, false, false, false, false, false],
          frequency: "1x",
          name: "read",
          type: "hobby"
        }
      }
    });
  });

  it("sets isCreatingHabit to true", () => {
    const initialState = {};
    const state = habitsReducer(initialState, toggleIsCreatingHabit());
    expect(state.isCreatingHabit).toEqual(true);
  });

  it("returns state when no recognized action is provided", () => {
    const initialState = { works: true };
    const state = habitsReducer(initialState, { type: "NOT_RECOGNIZED" });
    expect(state).toEqual(initialState);
  });
});
