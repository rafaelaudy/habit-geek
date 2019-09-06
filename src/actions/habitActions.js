export const CREATE_HABIT = "CREATE_HABIT";
export const createHabit = (name, type, frequency) => ({
  type: CREATE_HABIT,
  payload: {
    name,
    type,
    frequency
  }
});
