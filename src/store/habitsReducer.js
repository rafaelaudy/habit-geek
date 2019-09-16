import {
  CREATE_HABIT,
  TOGGLE_IS_CREATING_HABIT,
  TOGGLE_DAY_HABIT,
  START_NEW_WEEK
} from "../actions/habitActions";
import { getCurrentWeek } from "../utils/dateUtils";

// {
//   1 (weeks) {
//      name: {name, type, frequency, checked: [false, false, false, false, false, false, false] };
//   }
// }

const defaulState = {
  weeks: {
    [getCurrentWeek()]: {}
  },
  currentWeek: getCurrentWeek(),
  isCreatingHabit: false
};

const habitsReducer = (state = defaulState, { type, payload }) => {
  switch (type) {
    case START_NEW_WEEK: {
      const newWeek = {};
      Object.keys(state.weeks[state.currentWeek]).forEach(key => {
        const { name, type, frequency } = state.weeks[state.currentWeek][key];
        newWeek[key] = {
          name,
          type,
          frequency,
          checked: [false, false, false, false, false, false, false]
        };
      });
      const currentWeek = getCurrentWeek();

      return {
        ...state,
        currentWeek,
        weeks: {
          ...state.weeks,
          [currentWeek]: newWeek
        }
      };
    }

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

    case TOGGLE_IS_CREATING_HABIT: {
      return { ...state, isCreatingHabit: !state.isCreatingHabit };
    }

    default: {
      return state;
    }
  }
};

export default habitsReducer;
