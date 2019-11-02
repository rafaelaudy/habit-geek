import React, { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";

import HabitTable from "../habits/HabitTable";
import "./History.scss";
import { getWeekIntervalText } from "@habit-geek/shared/utils/dateUtils";

const History = ({ weeks }) => {
  const [openedList, setOpened] = useState({
    [weeks[0] ? weeks[0].week : "empty"]: true
  });
  const { t } = useTranslation();

  const toggleOpened = week => {
    setOpened({ ...openedList, [week]: openedList[week] ? false : true });
  };

  const getHabit = (habits, weekNumber) => (
    <HabitTable
      key={`history-habit-table-${weekNumber}`}
      habits={habits}
      isReadOnly={true}
      toggleDayHabit={() => {}}
    ></HabitTable>
  );

  const getWeeks = () => {
    return weeks.map(({ week, habits }) => {
      return (
        <div className="card" key={`history-habit-${week}`}>
          <div
            className="card-header history__header"
            id={`history-habit-header-${week}`}
          >
            <button
              className="btn btn-secondary history__header-button"
              aria-expanded={openedList[week] ? "True" : "False"}
              aria-controls={`history-habit-content-${week}`}
              onClick={() => toggleOpened(week)}
            >
              {getWeekIntervalText(week)}
            </button>
          </div>

          <div
            id={`history-habit-content-${week}`}
            className={`collapse ${openedList[week] ? "show" : ""}`}
            aria-labelledby={`history-habit-header-${week}`}
          >
            <div className="card-body">{getHabit(habits, week)}</div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="history large-size-container">
      {weeks.length === 0 ? (
        <h2 className="mb-3 history__empty-data">
          {t("history-title-empty-data")}
        </h2>
      ) : (
        <Fragment>
          <h2 className="mb-3">{t("history-title")}</h2>
          <div id="history-accordion">{getWeeks()}</div>
        </Fragment>
      )}
    </div>
  );
};

export default History;
