import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions, deleteTransactions }) => {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction) => {
          return (
            <li>
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
