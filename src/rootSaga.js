import { all } from "redux-saga/effects";
import { searchSaga } from "./features/Search/searchSaga";

export default function* rootSaga() {
  yield all([searchSaga()]);
}
