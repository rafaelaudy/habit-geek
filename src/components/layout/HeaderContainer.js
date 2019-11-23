import { connect } from "react-redux";

import Header from "./Header";

const mapStateToProps = ({ user }) => ({
  jwt: user.jwt
});

export default connect(mapStateToProps)(Header);
