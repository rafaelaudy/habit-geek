import React from "react";
import { Router } from "@reach/router";
import "./App.scss";
import Welcome from "./Welcome";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Router>
        <Welcome path="/" default></Welcome>
        <Dashboard path="/dashboard"></Dashboard>
      </Router>
    </div>
  );
}

export default App;
