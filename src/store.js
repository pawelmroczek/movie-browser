import { configureStore } from "@reduxjs/toolkit";
import browserSlice from "./features/browserSlice";

const store = configureStore({
  reducer:{
    browser:browserSlice,
  },
})

export default store;