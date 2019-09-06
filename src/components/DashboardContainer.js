import { connect } from "react-redux";

import Dashboard from "./Dashboard";

const mapStateToProps = ({ habits }) => ({
  habits: habits.list
});

export default connect(mapStateToProps)(Dashboard);
