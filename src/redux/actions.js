export const ADD_TRANSACTIONS = "ADD_TRANSACTIONS";
export const DELETE_TRANSACTIONS = "DELETE_TRANSACTIONS";

export const addTransactions = (transactions) => ({
  type: ADD_TRANSACTIONS,
  payload: transactions,
});

export const deleteTransactions = (transactionID) => ({
  type: DELETE_TRANSACTIONS,
  payload: transactionID,
});
