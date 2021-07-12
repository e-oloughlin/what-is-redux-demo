import { INCREASE_AGE } from '../constants';

const initialState = {
  name: "TBL",
  age: 0,
};

const appState = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_AGE:
      return {
        ...state,
        age: state.age + 1,
      };
    default:
      return initialState;
  }
};

export default appState;
