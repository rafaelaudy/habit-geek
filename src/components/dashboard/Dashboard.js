import React, { useState } from "react";

import SaveHabit from "../habits/SaveHabit";
import DashboardView from "./DashboardView";

const Dashboard = ({
  username,
  currentHabits,
  previousHabits,
  currentWeek,
  previousWeek,
  saveHabit,
  deleteHabit,
  toggleDayHabit
}) => {
  const [isEditingHabit, setIsEditingHabit] = useState({});

  if (isEditingHabit.isEditing) {
    const { name, frequency, type } = isEditingHabit.id
      ? currentHabits.filter(({ name }) => name === isEditingHabit.id)[0]
      : {};

    return (
      <SaveHabit
        id={isEditingHabit.id}
        name={name}
        frequency={frequency}
        type={type}
        saveHabit={saveHabit}
        deleteHabit={deleteHabit}
        onGoBack={() => setIsEditingHabit({})}
      />
    );
  }

  return (
    <DashboardView
      username={username}
      currentHabits={currentHabits}
      previousHabits={previousHabits}
      currentWeek={currentWeek}
      previousWeek={previousWeek}
      onAddNewHabit={() => setIsEditingHabit({ isEditing: true })}
      onUpdateHabit={id => setIsEditingHabit({ isEditing: true, id })}
      toggleDayHabit={toggleDayHabit}
    />
  );
};

export default Dashboard;
