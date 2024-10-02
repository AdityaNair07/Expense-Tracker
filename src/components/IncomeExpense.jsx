import React from "react";

const IncomeExpense = ({ transactions }) => {
  const amount = transactions.map((transaction) => Number(transaction.amount));

  const income = amount
    .filter((data) => data > 0)
    .reduce((acc, item) => acc + item, 0);

  const expense = amount
    .filter((data) => data < 0)
    .reduce((acc, item) => acc + item, 0);

  return (
    <>
      <div className="w-min mx-auto flex p-5 items-center justify-center text-center border-2 border-slate-700 bg-white rounded-md">
        <div className="income p-5 border-r-2 border-slate-700">
          <h2 className="text-slate-700 font-bold text-3xl mb-3">Income</h2>
          <p className="text-green-500 text-xl font-semibold">+ ₹{income}</p>
        </div>
        <div className="expense p-5">
          <h2 className="text-slate-700 font-bold text-3xl mb-3">Expense</h2>
          <p className="text-red-500 text-xl font-semibold">
            -₹{Math.abs(expense)}
          </p>
        </div>
      </div>
    </>
  );
};

export default IncomeExpense;
