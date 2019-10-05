import React, { useState, Fragment } from "react";

import HabitTable from "../habits/HabitTable";
import DashboardWeekHeader from "./DashboardWeekHeader";

const DashboardView = ({
  username,
  currentHabits,
  previousHabits,
  currentWeek,
  previousWeek,
  onAddNewHabit,
  onUpdateHabit,
  toggleDayHabit
}) => {
  const [isCurrentWeek, setIsCurrentWeek] = useState(true);

  return (
    <div className="large-size-container">
      <h2 className="mb-3">
        What have you done this week{username ? " " + username : ""}?
      </h2>

      <DashboardWeekHeader
        week={isCurrentWeek ? currentWeek : previousWeek}
        isCurrentWeek={isCurrentWeek}
        hasPreviousWeek={previousWeek}
        toggleWeek={setIsCurrentWeek}
      ></DashboardWeekHeader>

      <HabitTable
        habits={isCurrentWeek ? currentHabits : previousHabits}
        week={isCurrentWeek ? currentWeek : previousWeek}
        toggleDayHabit={toggleDayHabit}
        onUpdateHabit={onUpdateHabit}
      ></HabitTable>

      {isCurrentWeek ? (
        <Fragment>
          <hr />
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary btn-lg" onClick={onAddNewHabit}>
              I'll add a new habit!
            </button>
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};

export default DashboardView;
