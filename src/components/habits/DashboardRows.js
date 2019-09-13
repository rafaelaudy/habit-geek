import React, { Fragment } from "react";

import HabitCheckbox from "./HabitCheckbox";
import "./DashboardRows.scss";

const DashboardRows = ({ habits, toggleDayHabit }) => {
  const dashboardRows = habits.map(
    ({ name, frequency, checked }, containerIndex) => {
      const today = new Date().getDay();
      const daysUntilEndOfWeek = today === 0 ? 1 : -today + 8;
      const checkedDays = checked.filter(checkedDay => checkedDay).length;

      const accomplishedClass = frequency <= checkedDays ? "table-success" : "";
      const failedClass =
        frequency > checkedDays + daysUntilEndOfWeek ? "table-danger" : "";

      return (
        <div
          key={`check-container-${containerIndex}`}
          className="dashboard__row"
        >
          <div className="dashboard__cell-habit-container">
            ({frequency}x) - {name}
          </div>
          <div
            className={`dashboard__cell-frequency-container ${accomplishedClass} ${failedClass}`}
          >
            {[...Array(7).keys()].map(checkIndex => (
              <div
                className="dashboard__cell"
                key={`check-${containerIndex}-${checkIndex}`}
              >
                <HabitCheckbox
                  clickHandler={() => toggleDayHabit(name, checkIndex)}
                  isChecked={checked[checkIndex]}
                ></HabitCheckbox>
              </div>
            ))}
          </div>
        </div>
      );
    }
  );

  return <Fragment>{dashboardRows}</Fragment>;
};

export default DashboardRows;
