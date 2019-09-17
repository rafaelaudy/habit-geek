import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import {
  createHabit,
  toggleIsCreatingHabit,
  toggleDayHabit
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
    name: user.name,
    habits: mappedHabits,
    isCreatingHabit: habits.isCreatingHabit
  };
};

const mapDispatchToProps = {
  createHabit,
  toggleIsCreatingHabit,
  toggleDayHabit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
