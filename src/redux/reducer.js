const initialState = {
  transactions: [
    { id: 1, text: "hehe", amount: 10 },
    { id: 2, text: "hehehe", amount: 15 },
    { id: 3, text: "hehehehe", amount: 25 },
  ],
};

const MyReducer = (state = initialState, action) => {
  return state;
};

export default MyReducer;
