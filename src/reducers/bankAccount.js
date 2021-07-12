import { DONATE_MONEY } from "../constants";

const initialState = {
  name: 'Barclays',
  currentAccount: 0,
};

const bankAccount = (state = initialState, action) => {
  switch (action.type) {
    case DONATE_MONEY:
      return {
        ...state,
        currentAccount: action.amount + state.currentAccount,
      };
    default:
      return initialState;
  }
};

export default bankAccount;
