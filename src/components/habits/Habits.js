import React from "react";

import NewHabit from "./NewHabit";
import Dashboard from "./Dashboard";

const Habits = ({
  habits,
  name,
  createHabit,
  isCreatingHabit,
  toggleIsCreatingHabit,
  toggleDayHabit
}) => {
  return isCreatingHabit ? (
    <NewHabit
      createHabit={createHabit}
      toggleIsCreatingHabit={toggleIsCreatingHabit}
    />
  ) : (
    <Dashboard
      username={name}
      habits={habits}
      toggleIsCreatingHabit={toggleIsCreatingHabit}
      toggleDayHabit={toggleDayHabit}
    />
  );
};

export default Habits;
