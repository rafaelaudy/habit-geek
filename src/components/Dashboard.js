import React from "react";
import "./Dashboard.scss";

const Dashboard = ({ name, habits }) => {
  const habitComponents = habits.map((habit, index) => (
    <div className="dashboard__row" key={`habit-${index}`}>
      {habit}
    </div>
  ));

  const checkComponents = habits.map((habit, containerIndex) => (
    <div key={`check-container-${containerIndex}`} className="dashboard__row">
      {[...Array(7).keys()].map(checkIndex => (
        <input
          key={`check-${containerIndex}-${checkIndex}`}
          className="dashboard__cell"
          type="checkbox"
        ></input>
      ))}
    </div>
  ));

  return (
    <div className="dashboard">
      <h2>Do your best{name ? " " + name : ""}!</h2>
      <div className="dashboard__container">
        <div className="dashboard__habits">
          <div className="dashboard__row"></div>
          {habitComponents}
        </div>
        <div className="dashboard__days">
          <div className="dashboard__row">
            <div className="dashboard__cell">Mon</div>
            <div className="dashboard__cell">Tue</div>
            <div className="dashboard__cell">Wed</div>
            <div className="dashboard__cell">Thu</div>
            <div className="dashboard__cell">Fri</div>
            <div className="dashboard__cell">Sat</div>
            <div className="dashboard__cell">Sun</div>
          </div>
          {checkComponents}
        </div>
      </div>

      <button className="dashboard__add" onClick={() => {}}>
        Add habit
      </button>
    </div>
  );
};

export default Dashboard;
