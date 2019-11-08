import React from "react";

import HabitRowActions from "./HabitRowActions";
import HabitRowFrequency from "./HabitRowFrequency";
import "./HabitRows.scss";

const HabitRows = ({
  week,
  habits,
  isReadOnly,
  toggleDayHabit,
  onUpdateHabit
}) =>
  habits.map(
    (
      { name, frequency, checked, habitSucceded, habitFailed },
      containerIndex
    ) => {
      return (
        <div key={`check-container-${containerIndex}`} className="habit-row">
          <div className="habit-row__title">
            <span>
              ({frequency}x) - {name}
            </span>
          </div>

          <HabitRowFrequency
            week={week}
            name={name}
            checked={checked}
            habitSucceded={habitSucceded}
            habitFailed={habitFailed}
            isReadOnly={isReadOnly}
            toggleDayHabit={toggleDayHabit}
          ></HabitRowFrequency>

          {isReadOnly ? null : (
            <HabitRowActions
              week={week}
              name={name}
              onUpdateHabit={onUpdateHabit}
            ></HabitRowActions>
          )}
        </div>
      );
    }
  );

export default HabitRows;
