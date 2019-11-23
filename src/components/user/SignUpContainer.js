import { connect } from "react-redux";
import SignUp from "./SignUp";
import { saveSession } from "@rafael.audy/habit-geek-utils/actions/userActions";

const mapStateToProps = ({ user }) => ({
  jwt: user.jwt
});

const mapDispatchToProps = {
  saveSession
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
