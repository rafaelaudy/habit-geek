import React, { useState } from "react";
import { navigate } from "@reach/router";
import "./Profile.scss";
import avatar1 from "./../../imgs/avatars/001-burglar.svg";
import avatar2 from "./../../imgs/avatars/002-woman.svg";
import avatar3 from "./../../imgs/avatars/003-superhero.svg";
import avatar4 from "./../../imgs/avatars/004-robot.svg";
import avatar5 from "./../../imgs/avatars/005-dragon.svg";
import avatar6 from "./../../imgs/avatars/006-cyborg.svg";

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const Profile = ({ name: initialName, avatar, registerUser }) => {
  const [name, setName] = useState(initialName);
  const [selectedAvatar, setAvatar] = useState(avatar ? avatar : "");

  const register = () => {
    registerUser(name, selectedAvatar);
    navigate("/habits");
  };

  return (
    <div className="mobile-size-container">
      <h2>Super hero who?</h2>
      <div className="mb-3">
        <label htmlFor="profile-name">Name:</label>
        <input
          id="profile-name"
          className="form-control"
          value={name}
          onChange={e => setName(e.target.value)}
        ></input>
      </div>
      <div className="mb-3">
        <label htmlFor="profile-avatar">Avatar:</label>
        <div className="input-group profile__avatar-container">
          {avatars.map((avatar, index) => (
            <input
              key={`avatar-${index}`}
              onClick={() => setAvatar(avatar)}
              type="image"
              src={avatar}
              alt="Search"
              className={`profile__avatar ${
                avatar === selectedAvatar ? "profile__avatar--selected" : ""
              }`}
            ></input>
          ))}
        </div>
      </div>
      <hr className="mb-4" />
      <button className="btn btn-primary btn-lg btn-block" onClick={register}>
        Done!
      </button>
    </div>
  );
};

export default Profile;