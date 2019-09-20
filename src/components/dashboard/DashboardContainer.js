import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import {
  saveHabit,
  toggleDayHabit,
  deleteHabit
} from "../../actions/habitActions";

const mapStateToProps = ({ habits, user }) => {
  const currentWeekHabits = habits.weeks[habits.currentWeek];

  const mappedHabits = currentWeekHabits
    ? Object.keys(currentWeekHabits).map(key => {
        return {
          name: key,
          ...currentWeekHabits[key]
        };
      })
    : [];

  return {
    username: user.name,
    habits: mappedHabits
  };
};

const mapDispatchToProps = {
  saveHabit,
  deleteHabit,
  toggleDayHabit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
