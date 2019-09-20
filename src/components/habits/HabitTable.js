import React from "react";

import HabitHeader from "./HabitHeader";
import HabitRows from "./HabitRows";
import "./HabitTable.scss";

const HabitTable = ({ habits, isReadOnly, toggleDayHabit, updateHabit }) => {
  return (
    <div className="mb-3">
      <HabitHeader isReadOnly={isReadOnly}></HabitHeader>
      {
        <HabitRows
          habits={habits}
          isReadOnly={isReadOnly}
          toggleDayHabit={toggleDayHabit}
          updateHabit={updateHabit}
        ></HabitRows>
      }
    </div>
  );
};

export default HabitTable;
