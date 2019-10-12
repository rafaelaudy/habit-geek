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
  const getButton = (icon, isDisabled) => (
    <button
      className={`habit__cell-action-container btn btn-link ${
        isDisabled ? "disabled" : ""
      }`}
      onClick={clickHandler}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );

  return (
    <div className="mb-3 d-flex justify-content-center align-items-baseline">
      {hasPreviousWeek ? getButton(faChevronCircleLeft, !isCurrentWeek) : null}
      <h5>{getWeekIntervalText(week)}</h5>
      {hasPreviousWeek ? getButton(faChevronCircleRight, isCurrentWeek) : null}
    </div>
  );
};

export default DashboardWeekHeader;
