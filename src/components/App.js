import React from "react";
import { Router } from "@reach/router";
import "./App.css";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Router>
        <Welcome path="/" default></Welcome>
      </Router>
    </div>
  );
}

export default App;
