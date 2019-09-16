export const START_NEW_WEEK = "START_NEW_WEEK";
export const startNewWeek = () => ({
  type: START_NEW_WEEK
});

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

export const TOGGLE_IS_CREATING_HABIT = "TOGGLE_IS_CREATING_HABIT";
export const toggleIsCreatingHabit = () => ({
  type: TOGGLE_IS_CREATING_HABIT
});
