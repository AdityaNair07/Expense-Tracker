import React from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransaction from "../components/AddTransaction";
import { addTransactions, deleteTransactions } from "../redux/actions";
import TransactionList from "../components/TransactionList";
import IncomeExpense from "../components/IncomeExpense";

export const Main = ({ transactions, addTransactions, deleteTransactions }) => {
  return (
    <div className="bg-slate-400 w-full h-full flex flex-col p-10 text-white">
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList
        transactions={transactions}
        deleteTransactions={(transactionID) =>
          deleteTransactions(transactionID)
        }
      />
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
  deleteTransactions: (transactionID) =>
    dispatch(deleteTransactions(transactionID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
