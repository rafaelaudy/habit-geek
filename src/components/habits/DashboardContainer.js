import { connect } from "react-redux";

import Dashboard from "./Dashboard";

const mapStateToProps = ({ habits, user }) => ({
  username: user.name,
  habits: habits.list
});

export default connect(mapStateToProps)(Dashboard);
