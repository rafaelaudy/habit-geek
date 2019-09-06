import { CREATE_HABIT } from "../actions/habitActions";

const defaulState = {
  list: []
};

const habitsReducer = (state = defaulState, { type, payload }) => {
  switch (type) {
    case CREATE_HABIT: {
      return { ...state, list: [...state.list, { ...payload }] };
    }

    default: {
      return state;
    }
  }
};

export default habitsReducer;
