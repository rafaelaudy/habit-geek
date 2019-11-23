import { connect } from "react-redux";
import Profile from "./Profile";
import {
  saveUser,
  saveSession
} from "@rafael.audy/habit-geek-utils/actions/userActions";

const mapStateToProps = ({ user }) => ({
  name: user.name,
  avatar: user.avatar
});

const mapDispatchToProps = {
  saveUser,
  logout: () => saveSession()
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
