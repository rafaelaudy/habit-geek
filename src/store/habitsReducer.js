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

const getHabitStatus = (frequency, checked) => {
  const todayIndex = getTodayIndex();
  const daysUntilEndOfWeek = checked[todayIndex]
    ? -todayIndex + 6
    : -todayIndex + 7;
  const checkedDays = checked.filter(checkedDay => checkedDay).length;

  return {
    habitSucceded: frequency <= checkedDays,
    habitFailed: frequency > checkedDays + daysUntilEndOfWeek
  };
};

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
      const { habitSucceded, habitFailed } = getHabitStatus(
        payload.frequency,
        payload.checked
      );

      return {
        ...state,
        isCreatingHabit: false,
        weeks: {
          ...state.weeks,
          [state.currentWeek]: {
            ...state.weeks[state.currentWeek],
            [payload.name]: { ...payload, habitSucceded, habitFailed }
          }
        }
      };
    }

    case TOGGLE_DAY_HABIT: {
      const { frequency } = state.weeks[state.currentWeek][payload.name];
      const updatedChecked = state.weeks[state.currentWeek][
        payload.name
      ].checked.map((item, index) => (index !== payload.day ? item : !item));

      const { habitSucceded, habitFailed } = getHabitStatus(
        frequency,
        updatedChecked
      );

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
