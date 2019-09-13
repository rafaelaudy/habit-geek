import { connect } from "react-redux";
import Welcome from "./Welcome";
import { registerUser } from "../../actions/userActions";

const mapStateToProps = ({ user }) => ({
  name: user.name,
  avatar: user.avatar
});

const mapDispatchToProps = {
  registerUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
