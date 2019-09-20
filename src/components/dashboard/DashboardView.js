import React, { Fragment } from "react";

import HabitTable from "../habits/HabitTable";

const DashboardView = ({
  username,
  habits,
  addNewHabit,
  updateHabit,
  toggleDayHabit
}) => {
  return (
    <div className="large-size-container">
      <h2 className="mb-3">
        What have you done this week{username ? " " + username : ""}?
      </h2>

      {habits.length > 0 ? (
        <Fragment>
          <HabitTable
            toggleDayHabit={toggleDayHabit}
            habits={habits}
            updateHabit={updateHabit}
          ></HabitTable>
          <hr />
        </Fragment>
      ) : null}

      <div className="d-flex justify-content-center">
        <button className="btn btn-primary btn-lg" onClick={addNewHabit}>
          I'll add a new habit!
        </button>
      </div>
    </div>
  );
};

export default DashboardView;