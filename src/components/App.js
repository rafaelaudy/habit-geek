import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import WelcomeContainer from "./user/WelcomeContainer";
import DashboardContainer from "./habits/DashboardContainer";
import NewHabitContainer from "./habits/NewHabitContainer";

function App() {
  return (
    <div>
      <Router>
        <WelcomeContainer path="/" default></WelcomeContainer>
        <DashboardContainer path="/dashboard"></DashboardContainer>
        <NewHabitContainer path="/newhabit"></NewHabitContainer>
      </Router>
    </div>
  );
}

export default App;
