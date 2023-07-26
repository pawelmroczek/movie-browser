import { configureStore } from "@reduxjs/toolkit";
import browserSlice from "./features/browserSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer:{
    browser:browserSlice,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);

export default store;