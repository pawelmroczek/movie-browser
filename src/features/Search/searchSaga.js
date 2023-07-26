import { call, put, takeEvery } from "redux-saga/effects";
import { fetchSearchResult, setData, setStatus } from "../browserSlice";
import { getSearchResults } from "./getSearchResults";

function* fetchSearchResultsHandler(query) {
  try {
    yield put(setStatus("loading"));
    const data = yield call(getSearchResults, query.payload);
    yield put(setData(data));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus(error));
  }
}

export function* searchSaga() {
  yield takeEvery(fetchSearchResult.type, fetchSearchResultsHandler);
}
