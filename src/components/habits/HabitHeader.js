import React from "react";

const HabitHeader = () => {
  return (
    <div className="habit__row">
      <div className="habit__cell-habit-container"></div>
      <div className="habit__cell-frequency-container">
        <h5 className="habit__cell">Mon</h5>
        <h5 className="habit__cell">Tue</h5>
        <h5 className="habit__cell">Wed</h5>
        <h5 className="habit__cell">Thu</h5>
        <h5 className="habit__cell">Fri</h5>
        <h5 className="habit__cell">Sat</h5>
        <h5 className="habit__cell">Sun</h5>
      </div>
    </div>
  );
};

export default HabitHeader;
