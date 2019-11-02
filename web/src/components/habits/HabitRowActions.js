import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { getCurrentWeek } from "@habit-geek/shared/utils/dateUtils";

const HabitRowActions = ({ week, name, onUpdateHabit }) => {
  if (week === getCurrentWeek()) {
    return (
      <button
        className="icon-button icon-button__edit btn btn-link"
        onClick={() => onUpdateHabit(name)}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
    );
  }

  return <div className="icon-button"></div>;
};

export default HabitRowActions;
