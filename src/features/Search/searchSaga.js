import { call, put, takeEvery } from "redux-saga/effects";
import { fetchSearchResult, setData, setStatus, setGenres, setPopularPeople } from "../browserSlice";
import { getSearchResults} from "./getSearchResults";
import { getGenres } from "../../common/Genres/getGenres";
import { getPopularPeople } from "../People/getPopularPeople";

function* fetchSearchResultsHandler(query) {
  try {
    yield put(setStatus("loading"));
    const data = yield call(getSearchResults, query.payload);
    yield put(setData(data));
    const genres = yield call(getGenres);
    yield put(setGenres(genres));
    const people = yield call(getPopularPeople);
    yield put(setPopularPeople(people));
    yield put(setStatus("success"));
  } catch (error) {
    yield put(setStatus(error));
  }
}

export function* searchSaga() {
  yield takeEvery(fetchSearchResult.type, fetchSearchResultsHandler);
}
