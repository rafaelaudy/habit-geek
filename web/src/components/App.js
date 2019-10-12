import React from "react";
import { Router } from "@reach/router";

import { getCurrentWeek } from "@habit-geek/shared/utils/dateUtils";

import ProfileContainer from "./user/ProfileContainer";
import DashboardContainer from "./dashboard/DashboardContainer";
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
          <DashboardContainer path="/" default></DashboardContainer>
          <ProfileContainer path="/profile"></ProfileContainer>
          <HistoryContainer path="/history"></HistoryContainer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
