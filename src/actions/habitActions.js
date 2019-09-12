export const CREATE_HABIT = "CREATE_HABIT";
export const createHabit = (name, type, frequency) => ({
  type: CREATE_HABIT,
  payload: {
    name,
    type,
    frequency,
    checked: [false, false, false, false, false, false, false]
  }
});

export const TOGGLE_DAY_HABIT = "TOGGLE_DAY_HABIT";
export const toggleDayHabit = (name, day) => ({
  type: TOGGLE_DAY_HABIT,
  payload: {
    name,
    day
  }
});

export const START_HABIT_CREATION = "START_HABIT_CREATION";
export const startHabitCreation = () => ({
  type: START_HABIT_CREATION
});
