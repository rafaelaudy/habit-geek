import React from "react";
import {
  getTodayIndex,
  getCurrentWeek,
  isToday
} from "@habit-geek/shared/utils/dateUtils";

import HabitCheckbox from "./HabitCheckbox";
import "./HabitRowFrequency.scss";

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
    <div className={`habit-row-frequency ${succededClass} ${failedClass}`}>
      {[...Array(7).keys()].map(checkIndex => {
        const todayClass = isToday(week, checkIndex)
          ? "habit-row-frequency__cell--today"
          : "";
        const isTodayOrBefore = todayIndex < checkIndex;
        const isDisabled = isCurrentWeek ? isTodayOrBefore : false;

        return (
          <div
            className={`habit-row-frequency__cell ${todayClass}`}
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
