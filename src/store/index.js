import { createStore, combineReducers } from "redux";
import habitsReducer from "./habitsReducer";
import userReducer from "./userReducer";

const store = createStore(
  combineReducers({
    habits: habitsReducer,
    user: userReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
