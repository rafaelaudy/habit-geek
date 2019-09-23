import {
  SAVE_HABIT,
  TOGGLE_DAY_HABIT,
  START_NEW_WEEK,
  DELETE_HABIT
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
  currentWeek: getCurrentWeek()
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
      const [currentYearString, currentWeekString] = currentWeek.split("w");
      const previousWeekKey = `${currentYearString}w${currentWeekString - 1}`;
      const previousWeek = state.weeks[previousWeekKey]
        ? previousWeekKey
        : undefined;

      return {
        ...state,
        currentWeek,
        previousWeek,
        weeks: {
          ...state.weeks,
          [currentWeek]: newWeek
        }
      };
    }

    case SAVE_HABIT: {
      const checked = payload.id
        ? state.weeks[state.currentWeek][payload.id].checked
        : [false, false, false, false, false, false, false];

      const name = payload.name.trim();
      const { frequency, type } = payload;

      const { habitSucceded, habitFailed } = getHabitStatus(
        payload.frequency,
        checked
      );

      const habits = {
        ...state.weeks[state.currentWeek],
        [name]: { name, frequency, type, checked, habitSucceded, habitFailed }
      };

      if (payload.id && payload.id !== name) delete habits[payload.id];

      return {
        ...state,
        weeks: {
          ...state.weeks,
          [state.currentWeek]: habits
        }
      };
    }

    case DELETE_HABIT: {
      const habits = {
        ...state.weeks[state.currentWeek]
      };

      delete habits[payload.id.trim()];

      return {
        ...state,
        weeks: {
          ...state.weeks,
          [state.currentWeek]: habits
        }
      };
    }

    case TOGGLE_DAY_HABIT: {
      const week = payload.week;
      const { frequency } = state.weeks[week][payload.name];
      const updatedChecked = state.weeks[week][payload.name].checked.map(
        (item, index) => (index !== payload.day ? item : !item)
      );

      const { habitSucceded, habitFailed } = getHabitStatus(
        frequency,
        updatedChecked
      );

      return {
        ...state,
        weeks: {
          ...state.weeks,
          [week]: {
            ...state.weeks[week],
            [payload.name]: {
              ...state.weeks[week][payload.name],
              habitSucceded,
              habitFailed,
              checked: state.weeks[week][payload.name].checked.map(
                (item, index) => (index !== payload.day ? item : !item)
              )
            }
          }
        }
      };
    }

    default: {
      return state;
    }
  }
};

export default habitsReducer;
