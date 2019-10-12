import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import {
  saveHabit,
  toggleDayHabit,
  deleteHabit
} from "../../actions/habitActions";

const mapHabits = habits =>
  habits
    ? Object.keys(habits)
        .sort()
        .map(key => {
          return {
            name: key,
            ...habits[key]
          };
        })
    : [];

const mapStateToProps = ({ habits, user }) => {
  const { currentWeek, previousWeek } = habits;
  const currentMappedHabits = mapHabits(habits.weeks[habits.currentWeek]);
  const previousMappedHabits = mapHabits(habits.weeks[habits.previousWeek]);

  return {
    username: user.name,
    currentHabits: currentMappedHabits,
    previousHabits: previousMappedHabits,
    currentWeek,
    previousWeek
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
