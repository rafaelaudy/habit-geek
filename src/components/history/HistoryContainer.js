import { connect } from "react-redux";
import History from "./History";

const mapStateToProps = ({ habits }) => {
  let mappedWeeks = Object.keys(habits.weeks)
    .sort()
    .map(weekKey => {
      return {
        week: weekKey,
        habits: Object.keys(habits.weeks[weekKey]).map(habitKey => {
          return habits.weeks[weekKey][habitKey];
        })
      };
    })
    .reverse();

  mappedWeeks.shift();

  return {
    weeks: mappedWeeks
  };
};

export default connect(mapStateToProps)(History);
