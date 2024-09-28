import React from "react";

const Balance = ({ transactions }) => {
  const amount = transactions.map((data) => Number(data.amount));

  const total = amount.reduce((acc, item) => acc + item, 0);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Your Balance</h2>
        <h1 id="balance">₹{total}</h1>
      </div>
    </>
  );
};

export default Balance;
