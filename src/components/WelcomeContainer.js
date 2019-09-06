import { connect } from "react-redux";
import Welcome from "./Welcome";
import { registerUser } from "../actions/userActions";

const mapDispatchToProps = {
  registerUser
};

export default connect(
  undefined,
  mapDispatchToProps
)(Welcome);
