import {
  CREATE_HABIT,
  START_HABIT_CREATION,
  TOGGLE_DAY_HABIT
} from "../actions/habitActions";

// {
//   1 (weeks) {
//      name: {name, type, frequency, checked: [false, false, false, false, false, false, false] };
//   }
// }

const defaulState = {
  weeks: {},
  currentWeek: 1,
  isCreatingHabit: false
};

const habitsReducer = (state = defaulState, { type, payload }) => {
  switch (type) {
    case CREATE_HABIT: {
      return {
        ...state,
        isCreatingHabit: false,
        weeks: {
          ...state.weeks,
          [state.currentWeek]: {
            ...state.weeks[state.currentWeek],
            [payload.name]: { ...payload }
          }
        }
      };
    }

    case TOGGLE_DAY_HABIT: {
      return {
        ...state,
        weeks: {
          ...state.weeks,
          [state.currentWeek]: {
            ...state.weeks[state.currentWeek],
            [payload.name]: {
              ...state.weeks[state.currentWeek][payload.name],
              checked: state.weeks[state.currentWeek][payload.name].checked.map(
                (item, index) => (index !== payload.day ? item : !item)
              )
            }
          }
        }
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
