import { connect } from "react-redux";
import History from "./History";

const mapStateToProps = ({ habits }) => {
  let mappedWeeks = Object.keys(habits.weeks)
    .sort()
    .map(weekKey => {
      const habitsKeys = Object.keys(habits.weeks[weekKey]);

      if (habitsKeys.length === 0) return false;

      return {
        week: weekKey,
        habits: habitsKeys.map(habitKey => {
          return habits.weeks[weekKey][habitKey];
        })
      };
    })
    .filter(week => week)
    .reverse();

  mappedWeeks.shift();

  return {
    weeks: mappedWeeks
  };
};

export default connect(mapStateToProps)(History);
