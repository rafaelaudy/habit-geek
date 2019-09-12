import { connect } from "react-redux";
import Habits from "./Habits";
import {
  createHabit,
  startHabitCreation,
  toggleDayHabit
} from "../../actions/habitActions";

const mapStateToProps = ({ habits, user }) => {
  const currentWeekHabits = habits.weeks[habits.currentWeek];

  const mappedHabits = currentWeekHabits
    ? Object.keys(currentWeekHabits).map(key => {
        return {
          name: key,
          checked: currentWeekHabits[key].checked
        };
      })
    : [];

  return {
    username: user.name,
    habits: mappedHabits,
    isCreatingHabit: habits.isCreatingHabit
  };
};

const mapDispatchToProps = {
  createHabit: createHabit,
  startHabitCreation: startHabitCreation,
  toggleDayHabit: toggleDayHabit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Habits);
