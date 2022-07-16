import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, selectBalance, selectUser, withdraw } from "../reducers/walletSlice";
// import { selectBalance, selectUser } from "../rootReducer";

const Wallet = () => {
  // membuat selector
  const user = useSelector(selectUser);
  const balance = useSelector(selectBalance);

  const [currentAmount, SetCurrentAmount] = useState(0)

  const dispatch = useDispatch();

  const handleWithdraw = (amount) => {
    dispatch(withdraw({amount}))
  };
  const handleDeposit = (amount) => {
    dispatch(deposit({amount}))
  };

  return (
    <div>
      <h1>{user} Wallet</h1>
      <h2>Balance: Rp {balance.toLocaleString("id")}</h2>
      <button onClick={() => handleWithdraw(10000)}>Withdraw Rp 10.0000</button>
      <button onClick={() => handleDeposit(10000)}>Deposit Rp 10.000</button>
      <br></br>
      <input type='number' onChange={(e) => SetCurrentAmount(parseInt(e.target.value))}></input>
      <button onClick={() => handleWithdraw(currentAmount)}>Withdraw</button>
      <button onClick={() => handleDeposit(currentAmount)}>Deposit</button>
    </div>
  );
};

export default Wallet;
