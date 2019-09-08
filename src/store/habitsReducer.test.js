import habitsReducer from "./habitsReducer";
import { createHabit, startHabitCreation } from "../actions/habitActions";

describe("habitsReducer", () => {
  it("creates a habit", () => {
    const initialState = { list: [{}] };
    const state = habitsReducer(
      { ...initialState, isCreatingHabit: true },
      createHabit("read", "hobby", "1x")
    );
    expect(state.isCreatingHabit).toEqual(false);
    expect(state.list).toEqual([
      {},
      { name: "read", type: "hobby", frequency: "1x" }
    ]);
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
