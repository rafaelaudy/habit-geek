import React, { Fragment } from "react";

import "./HabitCheckbox.scss";

const HabitCheckbox = ({ isChecked, clickHandler, isDisabled, isReadOnly }) => {
  return (
    <Fragment>
      <label className="toggle">
        <input
          className="toggle__input"
          onChange={clickHandler}
          type="checkbox"
          checked={isChecked}
          disabled={isReadOnly ? false : isDisabled}
          data-readonly={isReadOnly}
        />
        <span className="toggle__label" data-readonly={isReadOnly}>
          <span className="toggle__text"></span>
        </span>
      </label>
    </Fragment>
  );
};

export default HabitCheckbox;
