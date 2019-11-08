import React from "react";
import { useTranslation } from "react-i18next";
import { isToday } from "@rafael.audy/habit-geek-utils/utils/dateUtils";

const HabitHeader = ({ isReadOnly, week }) => {
  const { t } = useTranslation();
  const days = t("date-days-short", { returnObjects: true });

  const cellComponents = days.map((day, index) => {
    const todayClass = isToday(week, index)
      ? "habit-row-frequency__cell--today-header"
      : "";
    return (
      <h5
        key={`header-cell-${index}`}
        className={`rounded-top habit-row-frequency__cell ${todayClass}`}
      >
        {day}
      </h5>
    );
  });

  return (
    <div className="habit-row__header">
      <div className="habit-row__title"></div>
      <div className="habit-row-frequency">{cellComponents}</div>
      {isReadOnly ? null : <div className="icon-button"></div>}
    </div>
  );
};

export default HabitHeader;
