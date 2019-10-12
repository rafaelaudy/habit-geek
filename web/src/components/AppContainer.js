import { connect } from "react-redux";

import { startNewWeek } from "@habit-geek/shared/actions/habitActions";

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
