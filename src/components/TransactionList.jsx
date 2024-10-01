import React from "react";
import Transaction from "./Transaction";

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {transactions.map((transaction) => {
          return (
            <li>
              <Transaction key={transaction.id} transaction={transaction} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TransactionList;
