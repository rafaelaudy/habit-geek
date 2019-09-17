import {
  CREATE_HABIT,
  TOGGLE_IS_CREATING_HABIT,
  TOGGLE_DAY_HABIT,
  START_NEW_WEEK
} from "../actions/habitActions";
import { getCurrentWeek, getTodayIndex } from "../utils/dateUtils";

// {
//   1 (weeks) {
//      name: {name, type, frequency, habitSucceded, habitFailed, checked: [false, false, false, false, false, false, false] };
//   }
// }

// import mockState from "./habitMockState";
// const habitsReducer = (state = mockState, { type, payload }) => {

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
      const { frequency } = state.weeks[state.currentWeek][payload.name];
      const updatedChecked = state.weeks[state.currentWeek][
        payload.name
      ].checked.map((item, index) => (index !== payload.day ? item : !item));

      const todayIndex = getTodayIndex();
      const daysUntilEndOfWeek = updatedChecked[todayIndex]
        ? -todayIndex + 6
        : -todayIndex + 7;
      const checkedDays = updatedChecked.filter(checkedDay => checkedDay)
        .length;

      const habitSucceded = frequency <= checkedDays;
      const habitFailed = frequency > checkedDays + daysUntilEndOfWeek;

      return {
        ...state,
        weeks: {
          ...state.weeks,
          [state.currentWeek]: {
            ...state.weeks[state.currentWeek],
            [payload.name]: {
              ...state.weeks[state.currentWeek][payload.name],
              habitSucceded,
              habitFailed,
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
