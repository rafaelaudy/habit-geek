import React, { useState } from "react";

import SaveHabit from "../habits/SaveHabit";
import DashboardView from "./DashboardView";

const Dashboard = ({ habits, username, saveHabit, toggleDayHabit }) => {
  const [isEditingHabit, setIsEditingHabit] = useState({});

  if (isEditingHabit.isEditing) {
    const { name, frequency, type } = isEditingHabit.id
      ? habits.filter(({ name }) => name === isEditingHabit.id)[0]
      : {};

    return (
      <SaveHabit
        id={isEditingHabit.id}
        name={name}
        frequency={frequency}
        type={type}
        saveHabit={saveHabit}
        goBack={() => setIsEditingHabit({})}
      />
    );
  }

  return (
    <DashboardView
      username={username}
      habits={habits}
      addNewHabit={() => setIsEditingHabit({ isEditing: true })}
      updateHabit={id => setIsEditingHabit({ isEditing: true, id })}
      toggleDayHabit={toggleDayHabit}
    />
  );
};

export default Dashboard;
