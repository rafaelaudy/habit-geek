import { createStore, combineReducers } from "redux";
import habitReducer from "./habitReducer";

const store = createStore(
  combineReducers({
    habits: habitReducer
  })
);

export default store;
