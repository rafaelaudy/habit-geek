import React from "react";
import { Router } from "@reach/router";

import { getCurrentWeek } from "../utils/dateUtils";

import ProfileContainer from "./user/ProfileContainer";
import HabitsContainer from "./habits/HabitsContainer";
import Layout from "./layout/Layout";
import History from "./history/History";

import "./App.scss";

function App({ currentWeek, startNewWeek }) {
  if (currentWeek !== getCurrentWeek()) {
    startNewWeek();
  }

  return (
    <div>
      <Router>
        <Layout path="/">
          <HabitsContainer path="/" default></HabitsContainer>
          <ProfileContainer path="/profile"></ProfileContainer>
          <History path="/history"></History>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
