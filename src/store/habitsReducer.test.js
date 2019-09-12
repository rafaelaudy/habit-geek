import habitsReducer from "./habitsReducer";
import {
  createHabit,
  startHabitCreation,
  toggleDayHabit
} from "../actions/habitActions";

describe("habitsReducer", () => {
  it("creates a habit", () => {
    const state = habitsReducer(undefined, createHabit("read", "hobby", "1x"));
    expect(state.isCreatingHabit).toEqual(false);
    expect(state.currentWeek).toEqual(1);
    expect(state.weeks).toEqual({
      "1": {
        read: {
          checked: [false, false, false, false, false, false, false],
          frequency: "1x",
          name: "read",
          type: "hobby"
        }
      }
    });
  });

  it("toggles a habit", () => {
    let state = habitsReducer(undefined, createHabit("read", "hobby", "1x"));
    state = habitsReducer(state, toggleDayHabit("read", 1));
    expect(state.isCreatingHabit).toEqual(false);
    expect(state.currentWeek).toEqual(1);
    expect(state.weeks).toEqual({
      "1": {
        read: {
          checked: [false, true, false, false, false, false, false],
          frequency: "1x",
          name: "read",
          type: "hobby"
        }
      }
    });
  });

  it("sets isCreatingHabit to true", () => {
    const initialState = {};
    const state = habitsReducer(initialState, startHabitCreation());
    expect(state.isCreatingHabit).toEqual(true);
  });

  it("returns state when no recognized action is provided", () => {
    const initialState = { works: true };
    const state = habitsReducer(initialState, { type: "NOT_RECOGNIZED" });
    expect(state).toEqual(initialState);
  });
});
