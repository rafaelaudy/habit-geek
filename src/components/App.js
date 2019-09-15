import React from "react";
import { Router } from "@reach/router";

import "./App.scss";
import ProfileContainer from "./user/ProfileContainer";
import HabitsContainer from "./habits/HabitsContainer";
import Layout from "./layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout path="/">
          <HabitsContainer path="/" default></HabitsContainer>
          <ProfileContainer path="/profile"></ProfileContainer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
