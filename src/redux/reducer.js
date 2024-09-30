import { ADD_TRANSACTIONS, addTransactions } from "./actions";

const initialState = {
  transactions: [],
};

const MyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTIONS:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default MyReducer;
