import walletSlice from "../reducers/walletSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    wallet: walletSlice,
  },
});

export default store;
