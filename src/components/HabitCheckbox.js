import React, { Fragment } from "react";
import "./HabitCheckbox.scss";

const HabitCheckbox = () => {
  return (
    <Fragment>
      <label class="toggle">
        <input class="toggle__input" type="checkbox" />
        <span class="toggle__label">
          <span class="toggle__text"></span>
        </span>
      </label>
    </Fragment>
  );
};

export default HabitCheckbox;
