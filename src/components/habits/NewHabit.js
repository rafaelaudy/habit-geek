import React, { useState } from "react";

import "./NewHabit.scss";

const NewHabit = ({ createHabit }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [frequency, setFrequency] = useState("");

  return (
    <div className="new-habits">
      <h2 className="new-habits__title">Ready to start a new habit?</h2>
      <div className="mb-3">
        <label htmlFor="new-habit-name">Name</label>
        <input
          id="new-habit-name"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="new-habit-type">Type</label>
        <select
          id="new-habit-type"
          className="form-control"
          value={type}
          onChange={e => setType(e.target.value)}
          onBlur={e => setType(e.target.value)}
        >
          <option vaue=""></option>
          <option vaue="Health">Health</option>
          <option vaue="Social">Social</option>
          <option vaue="Career">Career</option>
          <option vaue="Hobbies">Hobbies</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="new-habit-frequency">Frequency</label>
        <select
          id="new-habit-frequency"
          className="form-control"
          value={frequency}
          onChange={e => setFrequency(e.target.value)}
          onBlur={e => setFrequency(e.target.value)}
        >
          <option vaue=""></option>
          <option vaue="1x">1x</option>
          <option vaue="2x">2x</option>
          <option vaue="3x">3x</option>
          <option vaue="4x">4x</option>
          <option vaue="5x">5x</option>
          <option vaue="6x">6x</option>
          <option vaue="7x">7x</option>
        </select>
      </div>
      <hr className="mb-4" />
      <button
        className="btn btn-primary btn-lg btn-block"
        onClick={() => createHabit(name, type, frequency)}
      >
        Create!
      </button>
    </div>
  );
};

export default NewHabit;
