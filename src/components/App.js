import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import WelcomeContainer from "./user/WelcomeContainer";
import HabitsContainer from "./habits/HabitsContainer";

function App() {
  return (
    <div>
      <Router>
        <WelcomeContainer path="/" default></WelcomeContainer>
        <HabitsContainer path="/habits"></HabitsContainer>
      </Router>
    </div>
  );
}

export default App;
