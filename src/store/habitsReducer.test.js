import habitsReducer from "./habitsReducer";
import { createHabit } from "../actions/habitActions";

describe("habitsReducer", () => {
  it("creates a habit", () => {
    const initialState = { list: [{}] };
    const state = habitsReducer(
      initialState,
      createHabit("read", "hobby", "1x")
    );
    expect(state.list).toEqual([
      {},
      { name: "read", type: "hobby", frequency: "1x" }
    ]);
  });

  it("returns state when no recognized action is provided", () => {
    const initialState = { works: true };
    const state = habitsReducer(initialState, { type: "NOT_RECOGNIZED" });
    expect(state).toEqual(initialState);
  });
});
