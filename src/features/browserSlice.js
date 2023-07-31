import { createSlice } from "@reduxjs/toolkit";

const browserSlice = createSlice({
  name: "browser",
  initialState: {
    data: [],
    status: "loading",
    genres: [],
  },
  reducers: {
    fetchSearchResult: () => {},
    setData: (state, { payload: data }) => {
      state.data = data;
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres;
    },
    setStatus: (state, { payload: status }) => {
      state.status = status;
    },
  },
});

export const { setData, setStatus, setGenres, fetchSearchResult } = browserSlice.actions;

export const selectBrowserState = (state) => state.browser;
export const selectStatus = (state) => selectBrowserState(state).status;
export const selectData = (state) => selectBrowserState(state).data;
export const selectGenres = (state) => selectBrowserState(state).genres;

export default browserSlice.reducer;
