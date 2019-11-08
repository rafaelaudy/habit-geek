import { connect } from "react-redux";

import { startNewWeek } from "@rafael.audy/habit-geek-utils/actions/habitActions";

import "./App.scss";
import App from "./App";

const mapStateToProps = ({ habits }) => ({
  currentWeek: habits.currentWeek
});

const mapDispatchToProps = {
  startNewWeek
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
