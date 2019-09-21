import React, { useState } from "react";

const SaveHabit = ({
  id,
  name: defaultName = "",
  type: defaultType = "",
  frequency: defaultFrequency = "",
  saveHabit,
  deleteHabit,
  goBack
}) => {
  const [name, setName] = useState(defaultName);
  const [type, setType] = useState(defaultType);
  const [frequency, setFrequency] = useState(defaultFrequency);
  const [validityChecked, setValidityChecked] = useState(false);

  const saveAndClose = event => {
    event.preventDefault();
    setValidityChecked(true);

    if (event.target.checkValidity()) {
      saveHabit(id, name, type, frequency);
      goBack();
    }
  };

  const deleteHabitAndClose = () => {
    deleteHabit(id);
    goBack();
  };

  return (
    <form
      onSubmit={saveAndClose}
      className={`mobile-size-container ${
        validityChecked ? "was-validated" : ""
      }`}
      noValidate
    >
      <h2>Nice, what will it be?</h2>
      <div className="mb-3">
        <label htmlFor="new-habit-name">Name</label>
        <input
          id="new-habit-name"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        ></input>
        <div className="invalid-feedback">
          Hey! Trying to commit to "Blank"?
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="new-habit-type">Type</label>
        <select
          id="new-habit-type"
          className="form-control"
          value={type}
          onChange={e => setType(e.target.value)}
          onBlur={e => setType(e.target.value)}
          required
        >
          <option value=""></option>
          <option value="Health">Health</option>
          <option value="Social">Social</option>
          <option value="Career">Career</option>
          <option value="Hobbies">Hobbies</option>
        </select>
        <div className="invalid-feedback">Common... Help me help you!</div>
      </div>
      <div className="mb-3">
        <label htmlFor="new-habit-frequency">Frequency</label>
        <select
          id="new-habit-frequency"
          className="form-control"
          value={frequency}
          onChange={e => setFrequency(e.target.value)}
          onBlur={e => setFrequency(e.target.value)}
          required
        >
          <option value=""></option>
          <option value="1">1x</option>
          <option value="2">2x</option>
          <option value="3">3x</option>
          <option value="4">4x</option>
          <option value="5">5x</option>
          <option value="6">6x</option>
          <option value="7">7x</option>
        </select>
        <div className="invalid-feedback">
          Funny, that's an easy way to ace it!
        </div>
      </div>
      <hr className="mb-4" />
      <button className="btn btn-primary btn-lg btn-block">Let's start!</button>
      {id ? (
        <button
          type="button"
          className="btn btn-danger btn-lg btn-block"
          onClick={deleteHabitAndClose}
        >
          Let's scrap this!
        </button>
      ) : null}
      <button
        type="button"
        className="btn btn-secondary btn-lg btn-block"
        onClick={goBack}
      >
        Maybe tomorrow...
      </button>
    </form>
  );
};

export default SaveHabit;
