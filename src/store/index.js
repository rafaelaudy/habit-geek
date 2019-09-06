import { createStore, combineReducers } from "redux";
import habitReducer from "./habitReducer";
import userReducer from "./userReducer";

const store = createStore(
  combineReducers({
    habits: habitReducer,
    user: userReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
