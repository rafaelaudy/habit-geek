import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import HabitCheckbox from "./HabitCheckbox";
import { getTodayIndex } from "../../utils/dateUtils";

const HabitRows = ({ habits, isReadOnly, toggleDayHabit, updateHabit }) =>
  habits.map(
    (
      { name, frequency, checked, habitSucceded, habitFailed },
      containerIndex
    ) => {
      const succededClass = habitSucceded ? "table-success" : "";
      const failedClass = habitFailed ? "table-danger" : "";
      const todayIndex = getTodayIndex();

      return (
        <div key={`check-container-${containerIndex}`} className="habit__row">
          <div className="habit__cell-habit-container">
            <span>
              ({frequency}x) - {name}
            </span>
          </div>
          <div
            className={`habit__cell-frequency-container ${succededClass} ${failedClass}`}
          >
            {[...Array(7).keys()].map(checkIndex => (
              <div
                className="habit__cell"
                key={`check-${containerIndex}-${checkIndex}`}
              >
                <HabitCheckbox
                  clickHandler={() => toggleDayHabit(name, checkIndex)}
                  isChecked={checked[checkIndex]}
                  isDisabled={todayIndex < checkIndex}
                  isReadOnly={isReadOnly}
                ></HabitCheckbox>
              </div>
            ))}
          </div>
          {isReadOnly ? null : (
            <button
              className="habit__cell-action-container btn btn-link"
              onClick={() => updateHabit(name)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
          )}
        </div>
      );
    }
  );

export default HabitRows;
