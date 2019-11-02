import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight
} from "@fortawesome/free-solid-svg-icons";
import { getWeekIntervalText } from "@habit-geek/shared/utils/dateUtils";

const DashboardWeekHeader = ({
  week,
  isCurrentWeek,
  hasPreviousWeek,
  toggleWeek
}) => {
  const clickHandler = () => toggleWeek(!isCurrentWeek);
  const getButton = (direction, icon, isDisabled) => (
    <button
      className={`habit__cell-action-container habit__cell-action-${direction} btn btn-link ${
        isDisabled ? "disabled" : ""
      }`}
      onClick={clickHandler}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );

  return (
    <div className="mb-3 d-flex justify-content-center align-items-baseline">
      {hasPreviousWeek ? getButton('previous', faChevronCircleLeft, !isCurrentWeek) : null}
      <h5 className="dashboard-week-header__header">
        {getWeekIntervalText(week)}
      </h5>
      {hasPreviousWeek ? getButton('forward', faChevronCircleRight, isCurrentWeek) : null}
    </div>
  );
};

export default DashboardWeekHeader;
