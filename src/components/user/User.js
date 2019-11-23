import React from "react";
import Login from "./Login";
import ProfileContainer from "./ProfileContainer";

const User = ({ jwt, saveSession }) => {
  return jwt ? <ProfileContainer /> : <Login saveSession={saveSession} />;
};
export default User;
