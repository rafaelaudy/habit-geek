import React from "react";

import HabitRows from "./HabitRows";

const HabitTable = ({
  week,
  habits,
  isReadOnly,
  onUpdateHabit,
  toggleDayHabit
}) =>
  habits.length > 0 ? (
    <HabitRows
      habits={habits}
      week={week}
      isReadOnly={isReadOnly}
      toggleDayHabit={toggleDayHabit}
      onUpdateHabit={onUpdateHabit}
    ></HabitRows>
  ) : null;

export default HabitTable;
