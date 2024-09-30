export const ADD_TRANSACTIONS = "ADD_TRANSACTIONS";

export const addTransactions = (transactions) => ({
  type: ADD_TRANSACTIONS,
  payload: transactions,
});
