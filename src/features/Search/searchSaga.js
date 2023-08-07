import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchSearchResult,
  setData,
  setStatus,
  setGenres,
  fetchPopular,
} from "../browserSlice";
import { getSearchResults } from "./getSearchResults";
import { getGenres } from "../../common/Genres/getGenres";
import { getPopular } from "../Movies/getPopularMovies";

function* fetchSearchResultsHandler({ payload: object }) {
  try {
    yield put(setStatus("loading"));
    const data = yield call(
      getSearchResults,
      object.query,
      object.page,
      object.destination
    );
    yield put(setData(data));
    const genres = yield call(getGenres);
    yield put(setGenres(genres));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

function* fetchPopularHandler({ payload: object }) {
  try {
    yield put(setStatus("loading"));
    const data = yield call(getPopular, object.page, object.destination);
    const genres = yield call(getGenres);
    yield put(setGenres(genres));
    yield put(setData(data));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus("error"));
  }
}

export function* searchSaga() {
  yield takeEvery(fetchSearchResult.type, fetchSearchResultsHandler);
  yield takeEvery(fetchPopular.type, fetchPopularHandler);
}
