import React, { Fragment, useState } from "react";

import HabitTable from "../habits/HabitTable";
import "./History.scss";

const History = ({ weeks }) => {
  const [openedList, setOpened] = useState({
    [weeks[0] ? weeks[0].week : "empty"]: true
  });

  const toggleOpened = week => {
    setOpened({ ...openedList, [week]: openedList[week] ? false : true });
  };

  const getHabit = (habits, weekNumber) => (
    <HabitTable
      key={`history-habit-table-${weekNumber}`}
      habits={habits}
      isReadOnly={true}
      toggleDayHabit={() => {}}
    ></HabitTable>
  );

  const getWeeks = () => {
    return weeks.map(({ week, habits }) => {
      const [yearNumber, weekNumber] = week.substr(1).split("w");

      return (
        <div className="card" key={`history-habit-${weekNumber}`}>
          <div
            className="card-header history__header"
            id={`history-habit-header-${weekNumber}`}
          >
            <button
              className="btn btn-secondary history__header-button"
              aria-expanded={openedList[week] ? "True" : "False"}
              aria-controls={`history-habit-content-${weekNumber}`}
              onClick={() => toggleOpened(week)}
            >
              {`Week ${weekNumber} of ${yearNumber}`}
            </button>
          </div>

          <div
            id={`history-habit-content-${weekNumber}`}
            className={`collapse ${openedList[week] ? "show" : ""}`}
            aria-labelledby={`history-habit-header-${weekNumber}`}
          >
            <div className="card-body">{getHabit(habits, weekNumber)}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="large-size-container">
      {weeks.length === 0 ? (
        <h2 className="mb-3">You just started, come back next week!</h2>
      ) : (
        <Fragment>
          <h2 className="mb-3">Here is your progress so far:</h2>
          <div id="history-accordion">{getWeeks()}</div>
        </Fragment>
      )}
    </div>
  );
};

export default History;
