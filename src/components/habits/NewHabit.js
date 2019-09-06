import React, { useState } from "react";

const NewHabit = ({ createHabit }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [frequency, setFrequency] = useState("");

  return (
    <div>
      <h2>Ready to start a new habit?</h2>
      <div>
        <label htmlFor="new-habit-name">
          Name
          <input
            id="new-habit-name"
            value={name}
            onChange={e => setName(e.target.value)}
          ></input>
        </label>
      </div>
      <div>
        <label htmlFor="new-habit-type">
          Type
          <select
            id="new-habit-type"
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
        </label>
      </div>
      <div>
        <label htmlFor="new-habit-frequency">
          Frequency
          <select
            id="new-habit-frequency"
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
        </label>
      </div>
      <button onClick={() => createHabit(name, type, frequency)}>
        Create!
      </button>
    </div>
  );
};

export default NewHabit;
