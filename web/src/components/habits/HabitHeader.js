import React from "react";
import { useTranslation } from "react-i18next";
import { isToday } from "@habit-geek/shared/utils/dateUtils";

const HabitHeader = ({ isReadOnly, week }) => {
  const { t } = useTranslation();
  const days = t("date-days-short", { returnObjects: true });

  const cellComponents = days.map((day, index) => {
    const todayClass = isToday(week, index) ? "habit__cell--today-header" : "";
    return (
      <h5
        key={`header-cell-${index}`}
        className={`rounded-top habit__cell ${todayClass}`}
      >
        {day}
      </h5>
    );
  });

  return (
    <div className="habit__header-row">
      <div className="habit__cell-habit-container"></div>
      <div className="habit__cell-frequency-container">{cellComponents}</div>
      {isReadOnly ? null : <div className="habit__cell-action-container"></div>}
    </div>
  );
};

export default HabitHeader;
