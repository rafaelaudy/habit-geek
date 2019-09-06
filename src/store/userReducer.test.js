import userReducer from "./userReducer";
import { registerUser } from "../actions/userActions";

describe("userReducer", () => {
  it("registers the user", () => {
    const initialState = { other: true };
    const state = userReducer(initialState, registerUser("rafa", "avatar"));
    expect(state).toEqual({ ...initialState, name: "rafa", avatar: "avatar" });
  });

  it("returns state when no recognized action is provided", () => {
    const initialState = { works: true };
    const state = userReducer(initialState, { type: "NOT_RECOGNIZED" });
    expect(state).toEqual(initialState);
  });
});
