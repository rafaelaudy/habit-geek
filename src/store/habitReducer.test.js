import habitReducer from "./habitReducer";

describe("habitReducer", () => {
  it("returns state when no recognized action is provided", () => {
    const initialState = { works: true };
    const state = habitReducer(initialState, { type: "NOT_RECOGNIZED" });
    expect(state).toEqual(initialState);
  });
});
