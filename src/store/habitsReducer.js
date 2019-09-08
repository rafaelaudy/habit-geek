import { CREATE_HABIT, START_HABIT_CREATION } from "../actions/habitActions";

const defaulState = {
  list: [],
  isCreatingHabit: false
};

const habitsReducer = (state = defaulState, { type, payload }) => {
  switch (type) {
    case CREATE_HABIT: {
      return {
        ...state,
        list: [...state.list, { ...payload }],
        isCreatingHabit: false
      };
    }

    case START_HABIT_CREATION: {
      return { ...state, isCreatingHabit: true };
    }

    default: {
      return state;
    }
  }
};

export default habitsReducer;
