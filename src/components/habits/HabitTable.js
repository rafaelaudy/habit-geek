import React from "react";

import HabitHeader from "./HabitHeader";
import HabitRows from "./HabitRows";
import "./HabitTable.scss";

const HabitTable = ({ habits, toggleDayHabit, isReadOnly }) => {
  return (
    <div className="mb-3 dashboard__table">
      <HabitHeader></HabitHeader>
      {
        <HabitRows
          habits={habits}
          toggleDayHabit={toggleDayHabit}
          isReadOnly={isReadOnly}
        ></HabitRows>
      }
    </div>
  );
};

export default HabitTable;
