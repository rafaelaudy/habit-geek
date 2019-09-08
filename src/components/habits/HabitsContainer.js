import { connect } from "react-redux";
import Habits from "./Habits";
import { createHabit, startHabitCreation } from "../../actions/habitActions";

const mapStateToProps = ({ habits, user }) => ({
  username: user.name,
  habits: habits.list,
  isCreatingHabit: habits.isCreatingHabit
});

const mapDispatchToProps = {
  createHabit: createHabit,
  startHabitCreation: startHabitCreation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Habits);
