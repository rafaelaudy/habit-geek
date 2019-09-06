import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import WelcomeContainer from "./WelcomeContainer";
import DashboardContainer from "./DashboardContainer";

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
