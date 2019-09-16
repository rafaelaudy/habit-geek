import { connect } from "react-redux";
import Habits from "./Habits";

const mapStateToProps = ({ habits }) => {
  const mappedHabits = Object.keys(habits).map(habitKey => {
    return Object.key(habits[habitKey]).map(habitKey => {
      return habits[habitKey][habitKey];
    });
  });

  return {
    weeks: mappedHabits
  };
};

export default connect(mapStateToProps)(Habits);
