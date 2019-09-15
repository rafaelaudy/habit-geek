import React, { Fragment } from "react";

import "./Dashboard.scss";
import DashboardRows from "./DashboardRows";

const Dashboard = ({
  username,
  habits,
  toggleIsCreatingHabit,
  toggleDayHabit
}) => {
  return (
    <div className="dashboard">
      <h2 className="mb-3 dashboard__title">
        What have you done this week{username ? " " + username : ""}?
      </h2>

      {habits.length > 0 ? (
        <Fragment>
          <div className="mb-3 dashboard__table">
            <div className="dashboard__row">
              <div className="dashboard__cell-habit-container"></div>
              <div className="dashboard__cell-frequency-container">
                <h4 className="dashboard__cell">Mon</h4>
                <h4 className="dashboard__cell">Tue</h4>
                <h4 className="dashboard__cell">Wed</h4>
                <h4 className="dashboard__cell">Thu</h4>
                <h4 className="dashboard__cell">Fri</h4>
                <h4 className="dashboard__cell">Sat</h4>
                <h4 className="dashboard__cell">Sun</h4>
              </div>
            </div>
            {
              <DashboardRows
                habits={habits}
                toggleDayHabit={toggleDayHabit}
              ></DashboardRows>
            }
          </div>
          <hr />
        </Fragment>
      ) : null}

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-lg dashboard__add"
          onClick={toggleIsCreatingHabit}
        >
          I'll add a new habit!
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
