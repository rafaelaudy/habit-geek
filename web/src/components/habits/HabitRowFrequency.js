import React from "react";

import HabitCheckbox from "./HabitCheckbox";
import {
  getTodayIndex,
  getCurrentWeek,
  isToday
} from "@habit-geek/shared/utils/dateUtils";

const HabitRowFrequency = ({
  week,
  name,
  checked,
  habitSucceded,
  habitFailed,
  isReadOnly,
  toggleDayHabit
}) => {
  const todayIndex = getTodayIndex();
  const currentWeek = getCurrentWeek();
  const isCurrentWeek = week === currentWeek;
  const succededClass = habitSucceded ? "table-success" : "";
  const failedClass = habitFailed ? "table-danger" : "";

  return (
    <div
      className={`habit__cell-frequency-container ${succededClass} ${failedClass}`}
    >
      {[...Array(7).keys()].map(checkIndex => {
        const todayClass = isToday(week, checkIndex)
          ? "habit__cell--today"
          : "";
        const isTodayOrBefore = todayIndex < checkIndex;
        const isDisabled = isCurrentWeek ? isTodayOrBefore : false;

        return (
          <div
            className={`habit__cell ${todayClass}`}
            key={`check-${name}-${checkIndex}`}
          >
            <HabitCheckbox
              clickHandler={() => toggleDayHabit(week, name, checkIndex)}
              isChecked={checked[checkIndex]}
              isDisabled={isDisabled}
              isReadOnly={isReadOnly}
            ></HabitCheckbox>
          </div>
        );
      })}
    </div>
  );
};

export default HabitRowFrequency;
