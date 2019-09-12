import React, { Fragment } from "react";

import "./Dashboard.scss";
import HabitCheckbox from "./HabitCheckbox";

const Dashboard = ({
  username,
  habits,
  startHabitCreation,
  toggleDayHabit
}) => {
  const habitComponents = habits.map(({ name }, index) => (
    <div className="dashboard__row" key={`habit-${index}`}>
      {name}
    </div>
  ));

  const checkComponents = habits.map(({ name, checked }, containerIndex) => (
    <div key={`check-container-${containerIndex}`} className="dashboard__row">
      {[...Array(7).keys()].map(checkIndex => (
        <HabitCheckbox
          className="dashboard__cell"
          key={`check-${containerIndex}-${checkIndex}`}
          clickHandler={() => toggleDayHabit(name, checkIndex)}
          isChecked={checked[checkIndex]}
        ></HabitCheckbox>
      ))}
    </div>
  ));

  return (
    <div className="dashboard">
      <h2 className="mb-3 dashboard__title">
        What have you done this week{username ? " " + username : ""}?
      </h2>

      {habits.length > 0 ? (
        <Fragment>
          <div>
            <div className="mb-3 dashboard__container">
              <div className="dashboard__habits">
                <div className="dashboard__row"></div>
                {habitComponents}
              </div>
              <div className="dashboard__days">
                <div className="dashboard__row">
                  <h4 className="dashboard__cell">Mon</h4>
                  <h4 className="dashboard__cell">Tue</h4>
                  <h4 className="dashboard__cell">Wed</h4>
                  <h4 className="dashboard__cell">Thu</h4>
                  <h4 className="dashboard__cell">Fri</h4>
                  <h4 className="dashboard__cell">Sat</h4>
                  <h4 className="dashboard__cell">Sun</h4>
                </div>
                {checkComponents}
              </div>
            </div>
          </div>
          <hr />
        </Fragment>
      ) : null}

      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-lg dashboard__add"
          onClick={startHabitCreation}
        >
          Add habit
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
