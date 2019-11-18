import { connect } from "react-redux";

import { startNewWeek, updateCurrentWeekStatuses } from "@rafael.audy/habit-geek-utils/actions/habitActions";

import "./App.scss";
import App from "./App";

const mapStateToProps = ({ habits }) => ({
  currentWeek: habits.currentWeek
});

const mapDispatchToProps = {
  startNewWeek,
  updateCurrentWeekStatuses
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
