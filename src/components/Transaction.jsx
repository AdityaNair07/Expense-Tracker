import React from "react";

const Transaction = ({ transaction }) => {
  const sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <div>
      {transaction.text}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
    </div>
  );
};

export default Transaction;
