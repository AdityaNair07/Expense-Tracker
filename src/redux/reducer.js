import { ADD_TRANSACTIONS, DELETE_TRANSACTIONS } from "./actions";

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

    case DELETE_TRANSACTIONS:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default MyReducer;
