import React from "react";
import { Router } from "@reach/router";

import { getCurrentWeek } from "@rafael.audy/habit-geek-utils/utils/dateUtils";

import ProfileContainer from "./user/ProfileContainer";
import DashboardContainer from "./dashboard/DashboardContainer";
import Layout from "./layout/Layout";
import HistoryContainer from "./history/HistoryContainer";

import "./App.scss";

function App({ currentWeek, startNewWeek, updateCurrentWeekStatuses }) {
  if (currentWeek !== getCurrentWeek()) {
    startNewWeek();
  } else {
    updateCurrentWeekStatuses();
  }

  return (
    <div>
      <Router>
        <Layout path="/habit-geek" default>
          <DashboardContainer
            path="/habit-geek/habits"
            default
          ></DashboardContainer>
          <ProfileContainer path="/habit-geek/profile"></ProfileContainer>
          <HistoryContainer path="/habit-geek/history"></HistoryContainer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
