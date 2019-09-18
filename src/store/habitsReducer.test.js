import habitsReducer from "./habitsReducer";
import {
  createHabit,
  toggleIsCreatingHabit,
  toggleDayHabit,
  startNewWeek
} from "../actions/habitActions";
import { getTodayIndex } from "../utils/dateUtils";

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
            frequency: "1",
            name: "read",
            type: "hobby"
          },
          read: {
            checked: [false, true, false, true, false, false, false],
            frequency: "1",
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
});

describe("habitsReducer - toggles a habit", () => {
  it("toggles a habit", () => {
    let state = habitsReducer(undefined, createHabit("read", "hobby", "2"));
    state = habitsReducer(state, toggleDayHabit("read", 1));
    expect(state.isCreatingHabit).toEqual(false);
    expect(state.currentWeek).toEqual("y1w1");
    expect(state.weeks).toEqual({
      y1w1: {
        read: {
          checked: [false, true, false, false, false, false, false],
          frequency: "2",
          name: "read",
          type: "hobby",
          habitFailed: false,
          habitSucceded: false
        }
      }
    });
  });

  it("marks habits that are completed for that week", () => {
    let state = habitsReducer(undefined, createHabit("read", "hobby", "1"));
    state = habitsReducer(state, toggleDayHabit("read", 1));
    expect(state.weeks).toEqual({
      y1w1: {
        read: {
          checked: [false, true, false, false, false, false, false],
          frequency: "1",
          name: "read",
          type: "hobby",
          habitSucceded: true,
          habitFailed: false
        }
      }
    });
  });

  it("marks habits that have failed for that week", () => {
    let state = habitsReducer(undefined, createHabit("read", "hobby", "7"));
    state = habitsReducer(state, toggleDayHabit("read", 1));
    expect(state.weeks).toEqual({
      y1w1: {
        read: {
          checked: [false, true, false, false, false, false, false],
          frequency: "7",
          name: "read",
          type: "hobby",
          habitSucceded: false,
          habitFailed: true
        }
      }
    });
  });

  it("marks habits correctly at the last day of the week", () => {
    getTodayIndex.mockReturnValueOnce("6").mockReturnValueOnce("6");
    let state = habitsReducer(undefined, createHabit("read", "hobby", "1"));
    state = habitsReducer(state, createHabit("write", "hobby", "2"));
    state = habitsReducer(state, toggleDayHabit("read", 6));
    state = habitsReducer(state, toggleDayHabit("write", 5));
    expect(state.weeks).toEqual({
      y1w1: {
        read: {
          checked: [false, false, false, false, false, false, true],
          frequency: "1",
          name: "read",
          type: "hobby",
          habitSucceded: true,
          habitFailed: false
        },
        write: {
          checked: [false, false, false, false, false, true, false],
          frequency: "2",
          name: "write",
          type: "hobby",
          habitSucceded: false,
          habitFailed: false
        }
      }
    });
  });
});

describe("habitsReducer", () => {
  it("creates a habit", () => {
    const state = habitsReducer(undefined, createHabit("read", "hobby", "1"));
    expect(state.isCreatingHabit).toEqual(false);
    expect(state.currentWeek).toEqual("y1w1");
    expect(state.weeks).toEqual({
      y1w1: {
        read: {
          checked: [false, false, false, false, false, false, false],
          frequency: "1",
          name: "read",
          type: "hobby",
          habitFailed: false,
          habitSucceded: false
        }
      }
    });
  });

  it("checks if the habit failed after creation", () => {
    const state = habitsReducer(undefined, createHabit("read", "hobby", "7"));
    expect(state.weeks).toEqual({
      y1w1: {
        read: {
          checked: [false, false, false, false, false, false, false],
          frequency: "7",
          name: "read",
          type: "hobby",
          habitFailed: true,
          habitSucceded: false
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
