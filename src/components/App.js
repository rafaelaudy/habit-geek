import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import Welcome from "./Welcome";
import DashboardContainer from "./DashboardContainer";

function App() {
  return (
    <div>
      <Router>
        <Welcome path="/" default></Welcome>
        <DashboardContainer path="/dashboard"></DashboardContainer>
      </Router>
    </div>
  );
}

export default App;
