import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./Welcome.css";
import avatar1 from "./../imgs/avatars/001-burglar.svg";
import avatar2 from "./../imgs/avatars/002-woman.svg";
import avatar3 from "./../imgs/avatars/003-superhero.svg";
import avatar4 from "./../imgs/avatars/004-robot.svg";
import avatar5 from "./../imgs/avatars/005-dragon.svg";
import avatar6 from "./../imgs/avatars/006-cyborg.svg";

const Welcome = () => {
  const [name, setName] = useState("");

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
        <img className="avatar" alt="Avatar 1" src={avatar1}></img>
        <img className="avatar" alt="Avatar 1" src={avatar2}></img>
        <img className="avatar" alt="Avatar 1" src={avatar3}></img>
        <img className="avatar" alt="Avatar 1" src={avatar4}></img>
        <img className="avatar" alt="Avatar 1" src={avatar5}></img>
        <img className="avatar" alt="Avatar 1" src={avatar6}></img>
      </div>

      <button onClick={() => navigate("/dashboard")}>Done!</button>
    </div>
  );
};

export default Welcome;
