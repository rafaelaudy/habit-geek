import React, { Fragment } from "react";

import "./HabitCheckbox.scss";

const HabitCheckbox = ({ isChecked, clickHandler, isDisabled }) => {
  return (
    <Fragment>
      <label className="toggle">
        <input
          className="toggle__input"
          onClick={clickHandler}
          type="checkbox"
          defaultChecked={isChecked}
          disabled={isDisabled}
        />
        <span className="toggle__label">
          <span className="toggle__text"></span>
        </span>
      </label>
    </Fragment>
  );
};

export default HabitCheckbox;