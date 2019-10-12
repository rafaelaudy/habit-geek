import React from "react";

import HabitHeader from "./HabitHeader";
import HabitRows from "./HabitRows";
import "./HabitTable.scss";

const HabitTable = ({
  week,
  habits,
  isReadOnly,
  onUpdateHabit,
  toggleDayHabit
}) =>
  habits.length > 0 ? (
    <div className="mb-3">
      <HabitHeader isReadOnly={isReadOnly} week={week}></HabitHeader>
      <HabitRows
        habits={habits}
        week={week}
        isReadOnly={isReadOnly}
        toggleDayHabit={toggleDayHabit}
        onUpdateHabit={onUpdateHabit}
      ></HabitRows>
    </div>
  ) : null;

export default HabitTable;
