import { createSlice } from "@reduxjs/toolkit";

const browserSlice = createSlice({
  name: "browser",
  initialState: {
    data: [],
    status: "loading",
  },
  reducers: {
    fetchSearchResult: () => {},
    setData: (state, { payload: data }) => {
      state.data = data;
    },
    setStatus: (state, { payload: status }) => {
      state.status = status;
    },
  },
});

export const { setData, setStatus, fetchSearchResult } = browserSlice.actions;

export const selectBrowserState = (state) => state.browser;
export const selectStatus = (state) => selectBrowserState(state).status;
export const selectData = (state) => selectBrowserState(state).data;

export default browserSlice.reducer;
