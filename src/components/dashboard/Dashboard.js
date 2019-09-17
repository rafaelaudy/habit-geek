import React from "react";

import SaveHabit from "../habits/SaveHabit";
import DashboardView from "./DashboardView";

const Dashboard = ({
  habits,
  name,
  createHabit,
  isCreatingHabit,
  toggleIsCreatingHabit,
  toggleDayHabit
}) => {
  return isCreatingHabit ? (
    <SaveHabit
      createHabit={createHabit}
      toggleIsCreatingHabit={toggleIsCreatingHabit}
    />
  ) : (
    <DashboardView
      username={name}
      habits={habits}
      toggleIsCreatingHabit={toggleIsCreatingHabit}
      toggleDayHabit={toggleDayHabit}
    />
  );
};

export default Dashboard;
