import { connect } from "react-redux";
import User from "./User";
import { saveSession } from "@rafael.audy/habit-geek-utils/actions/userActions";

const mapStateToProps = ({ user }) => ({
  jwt: user.jwt
});

const mapDispatchToProps = {
  saveSession
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
