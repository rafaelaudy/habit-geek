import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import { getCurrentWeek } from "@habit-geek/shared/utils/dateUtils";

const HabitRowActions = ({ week, name, onUpdateHabit }) => {
  if (week === getCurrentWeek()) {
    return (
      <button
        className="habit__cell-action-container btn btn-link"
        onClick={() => onUpdateHabit(name)}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
    );
  }

  return <div className="habit__cell-action-container"></div>;
};

export default HabitRowActions;
