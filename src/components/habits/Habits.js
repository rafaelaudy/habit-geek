import React from "react";

import NewHabit from "./NewHabit";
import Dashboard from "./Dashboard";

const Habits = ({
  habits,
  username,
  createHabit,
  isCreatingHabit,
  startHabitCreation
}) => {
  return isCreatingHabit ? (
    <NewHabit createHabit={createHabit} />
  ) : (
    <Dashboard
      username={username}
      habits={habits}
      startHabitCreation={startHabitCreation}
    />
  );
};

export default Habits;
