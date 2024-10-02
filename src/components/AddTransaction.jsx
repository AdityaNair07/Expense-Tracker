import React, { useState } from "react";

const AddTransaction = ({ id, addTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: id,
      text: text,
      amount: amount,
      date: date,
    };
    addTransactions(newTransaction);
    setText("");
    setAmount(0);
    setDate("");
  };

  return (
    <div className="w-[500px] h-full mx-auto">
      <h3 className="text-3xl text-center font-semibold">Add Transaction</h3>
      <form onSubmit={handleSubmit} className="p-10">
        <div className="form-control flex flex-col mb-2 gap-2">
          <label className="text-lg font-bold" htmlFor="text">
            Text
          </label>
          <input
            className="p-2 rounded-md text-slate-700 w-full"
            id="text"
            type="text"
            placeholder="Enter text..."
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control flex flex-col mb-2 gap-2">
          <label className="text-lg font-bold" htmlFor="amount">
            Amount
          </label>
          <input
            className="p-2 rounded-md text-slate-700 w-full"
            id="amount"
            type="number"
            required
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-control flex flex-col mb-5 gap-2">
          <label className="text-lg font-bold" htmlFor="date">
            Date
          </label>
          <input
            className="p-2 rounded-md text-slate-700 w-full"
            required
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button className="p-2 rounded-md text-lg font-semibold bg-white text-slate-700 w-full">
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
