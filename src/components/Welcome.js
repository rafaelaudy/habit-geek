import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./Welcome.scss";
import avatar1 from "./../imgs/avatars/001-burglar.svg";
import avatar2 from "./../imgs/avatars/002-woman.svg";
import avatar3 from "./../imgs/avatars/003-superhero.svg";
import avatar4 from "./../imgs/avatars/004-robot.svg";
import avatar5 from "./../imgs/avatars/005-dragon.svg";
import avatar6 from "./../imgs/avatars/006-cyborg.svg";

const Welcome = ({ registerUser }) => {
  const [name, setName] = useState("");
  const [selectedAvatar, setAvatar] = useState(avatar1);

  const register = () => {
    registerUser(name, selectedAvatar);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Welcome!</h2>
      <label htmlFor="Name">
        Name:
        <input
          id="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
      </label>
      <div>
        Avatar:
        {[avatar1, avatar2, avatar3, avatar4, avatar5, avatar6].map(
          (avatar, index) => (
            <input
              key={`avatar-${index}`}
              onClick={() => setAvatar(avatar)}
              type="image"
              src={avatar}
              alt="Search"
              className="welcome__avatar"
            ></input>
          )
        )}
      </div>

      <button onClick={register}>Done!</button>
    </div>
  );
};

export default Welcome;
