import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import WelcomeContainer from "./user/WelcomeContainer";
import DashboardContainer from "./habits/DashboardContainer";

function App() {
  return (
    <div>
      <Router>
        <WelcomeContainer path="/" default></WelcomeContainer>
        <DashboardContainer path="/dashboard"></DashboardContainer>
      </Router>
    </div>
  );
}

export default App;
