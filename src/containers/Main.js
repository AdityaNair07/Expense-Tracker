import React from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransaction from "../components/AddTransaction";
import { addTransactions } from "../redux/actions";
import TransactionList from "../components/TransactionList";

export const Main = ({ transactions, addTransactions }) => {
  return (
    <div>
      <Balance transactions={transactions} />
      <TransactionList transactions={transactions} />
      <AddTransaction
        id={transactions[0] ? transactions[0].id + 1 : 1}
        addTransactions={(transactions) => addTransactions(transactions)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({ transactions: state.transactions });

const mapDispatchToProps = (dispatch) => ({
  addTransactions: (transactions) => dispatch(addTransactions(transactions)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
