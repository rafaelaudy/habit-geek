export const CREATE_HABIT = "CREATE_HABIT";
export const createHabit = (name, type, frequency) => ({
  type: CREATE_HABIT,
  payload: {
    name,
    type,
    frequency
  }
});

export const START_HABIT_CREATION = "START_HABIT_CREATION";
export const startHabitCreation = () => ({
  type: START_HABIT_CREATION
});
