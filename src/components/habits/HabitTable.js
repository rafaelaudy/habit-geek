import React from "react";

import HabitHeader from "./HabitHeader";
import HabitRows from "./HabitRows";
import "./HabitTable.scss";

const HabitTable = ({ habits, toggleDayHabit, isReadOnly }) => {
  return (
    <div className="mb-3">
      <HabitHeader isReadOnly={isReadOnly}></HabitHeader>
      {
        <HabitRows
          habits={habits}
          isReadOnly={isReadOnly}
          toggleDayHabit={toggleDayHabit}
        ></HabitRows>
      }
    </div>
  );
};

export default HabitTable;
