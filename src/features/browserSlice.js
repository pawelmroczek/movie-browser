import { createSlice } from "@reduxjs/toolkit";

const browserSlice = createSlice({
  name: "browser",
  initialState: {
    data: [],
    status: "loading",
    genres: [],
    people: [],
    person: [],
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
    setPopularPeople: (state, { payload: people }) => {
      state.people = people;
    },
    setPerson: (state, { payload: person }) => {
      state.person = person;
    },
  },
});

export const { setData, setStatus, setGenres, setPopularPeople, setPerson, fetchSearchResult } = browserSlice.actions;

export const selectBrowserState = (state) => state.browser;
export const selectStatus = (state) => selectBrowserState(state).status;
export const selectData = (state) => selectBrowserState(state).data;
export const selectGenres = (state) => selectBrowserState(state).genres;
export const selectPopularPeople = (state) => selectBrowserState(state).people;
export const selectPerson = (state) => selectBrowserState(state).person;


export default browserSlice.reducer;
