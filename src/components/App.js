import React from "react";
import { Router } from "@reach/router";

import { getCurrentWeek } from "@rafael.audy/habit-geek-utils/utils/dateUtils";

import UserContainer from "./user/UserContainer";
import ForgotPassword from "./user/ForgotPassword";
import SignUpContainer from "./user/SignUpContainer";
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
          <UserContainer path="/habit-geek/profile"></UserContainer>
          <UserContainer path="/habit-geek/login"></UserContainer>
          <ForgotPassword path="/habit-geek/forgotpassword"></ForgotPassword>
          <SignUpContainer path="/habit-geek/signup"></SignUpContainer>
          <HistoryContainer path="/habit-geek/history"></HistoryContainer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
