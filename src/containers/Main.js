import React from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";

export const Main = ({ transactions }) => {
  return (
    <div>
      <Balance transactions={transactions} />
    </div>
  );
};

const mapStateToProps = (state) => ({ transactions: state.transactions });

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
