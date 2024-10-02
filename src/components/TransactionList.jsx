import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions, deleteTransactions }) => {
  transactions = transactions.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  return (
    <div className="p-10 w-[500px] mx-auto">
      <h3 className="text-center text-3xl font-semibold mb-4">Transactions</h3>
      <ul className="flex flex-col items-start gap-3">
        {transactions.map((transaction) => {
          return (
            <li
              className={`bg-white rounded-md text-slate-600 p-2 w-full ${
                transaction.amount >= 0
                  ? "border-r-8 border-green-500"
                  : "border-r-8 border-red-500"
              }`}
            >
              <Transaction
                key={transaction.id}
                transaction={transaction}
                deleteTransactions={(transactionID) =>
                  deleteTransactions(transactionID)
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
