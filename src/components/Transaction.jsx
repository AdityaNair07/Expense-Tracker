import React from "react";

const Transaction = ({ transaction, deleteTransactions }) => {
  const sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <div>
      {transaction.text}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransactions(transaction.id)}>Delete</button>
    </div>
  );
};

export default Transaction;
