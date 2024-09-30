import React, { useState } from "react";

const AddTransaction = ({ id, addTransactions }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: id,
      text: text,
      amount: amount,
    };
    addTransactions(newTransaction);
  };

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            id="text"
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Type</label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
          />
        </div>
        <button>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
