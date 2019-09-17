import React from "react";
import { Router } from "@reach/router";

import { getCurrentWeek } from "../utils/dateUtils";

import ProfileContainer from "./user/ProfileContainer";
import HabitsContainer from "./habits/HabitsContainer";
import Layout from "./layout/Layout";
import HistoryContainer from "./history/HistoryContainer";

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
          <HistoryContainer path="/history"></HistoryContainer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
