import React from "react";
import { Router } from "@reach/router";

import "./App.scss";
import WelcomeContainer from "./user/WelcomeContainer";
import HabitsContainer from "./habits/HabitsContainer";
import Layout from "./layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout path="/">
          <HabitsContainer path="/" default></HabitsContainer>
          <WelcomeContainer path="/profile"></WelcomeContainer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
