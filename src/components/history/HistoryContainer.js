import { connect } from "react-redux";
import History from "./History";

const mapStateToProps = ({ habits }) => {
  const mappedWeeks = Object.keys(habits.weeks).map(weekKey => {
    return {
      week: weekKey,
      habits: Object.keys(habits.weeks[weekKey]).map(habitKey => {
        return habits.weeks[weekKey][habitKey];
      })
    };
  });

  return {
    weeks: mappedWeeks
  };
};

export default connect(mapStateToProps)(History);
