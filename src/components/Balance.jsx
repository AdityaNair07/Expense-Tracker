import React from "react";

const Balance = ({ transactions }) => {
  const amount = transactions.map((data) => Number(data.amount));

  const total = amount.reduce((acc, item) => acc + item, 0);

  return (
    <>
      <div className="flex flex-col items-center justify-center pb-7">
        <h2 className="text-3xl font-semibold p-3">Your Balance</h2>
        <h1 id="balance" className="text-4xl font-bold">
          ₹{total}
        </h1>
      </div>
    </>
  );
};

export default Balance;
