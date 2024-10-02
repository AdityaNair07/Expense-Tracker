import React from "react";

const Transaction = ({ transaction, deleteTransactions }) => {
  const sign = transaction.amount >= 0 ? "+" : "-";
  return (
    <div className="flex items-center justify-between font-bold text-lg uppercase group cursor-pointer p-2">
      {transaction.text}
      <div className="flex items-center justify-center gap-5">
        <span>{transaction.date}</span>
        <span className="text-lg font-semibold">
          {sign}₹{Math.abs(transaction.amount)}
        </span>
        <button
          className="group-hover:block hidden bg-red-500 px-2 py-1 rounded-md text-white"
          onClick={() => deleteTransactions(transaction.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Transaction;
