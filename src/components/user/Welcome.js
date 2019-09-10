import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./Welcome.scss";
import avatar1 from "./../../imgs/avatars/001-burglar.svg";
import avatar2 from "./../../imgs/avatars/002-woman.svg";
import avatar3 from "./../../imgs/avatars/003-superhero.svg";
import avatar4 from "./../../imgs/avatars/004-robot.svg";
import avatar5 from "./../../imgs/avatars/005-dragon.svg";
import avatar6 from "./../../imgs/avatars/006-cyborg.svg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const Welcome = ({ registerUser }) => {
  const [name, setName] = useState("");
  const [selectedAvatar, setAvatar] = useState(1);

  const register = () => {
    registerUser(name, avatars[selectedAvatar]);
    navigate("/habits");
  };

  return (
    <div className="welcome">
      <h2 className="welcome__title">Welcome!</h2>
      <div className="mb-3">
        <label htmlFor="Name">Name:</label>
        <input
          id="Name"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="Name">Avatar:</label>
        <div className="input-group welcome__avatar-container">
          {avatars.map((avatar, index) => (
            <input
              key={`avatar-${index}`}
              onClick={() => setAvatar(index)}
              type="image"
              src={avatar}
              alt="Search"
              className={`welcome__avatar ${
                index === selectedAvatar ? "welcome__avatar--selected" : ""
              }`}
            ></input>
          ))}
        </div>
      </div>
      <hr class="mb-4" />
      <button className="btn btn-primary btn-lg btn-block" onClick={register}>
        Done!
      </button>
    </div>
  );
};

export default Welcome;
