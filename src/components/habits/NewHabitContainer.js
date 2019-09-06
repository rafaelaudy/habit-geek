import { connect } from "react-redux";

import { createHabit } from "../../actions/habitActions";
import NewHabit from "./NewHabit";

const mapDispatchToProps = {
  createHabit: createHabit
};

export default connect(
  undefined,
  mapDispatchToProps
)(NewHabit);
