import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shows: {},
  loggedIn: true,
  userId: 0,
  searchResults: {},
};

/* eslint-disable no-param-reassign */
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.shows[action.payload.id] = action.payload;
    },
    setLogin(state, action) {
      state.loggedIn = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
    saveSearchResults(state, action) {
      state.searchResults = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

export const {
  addToFavorites,
  setLogin,
  setUserId,
  saveSearchResults,
} = actions;

export default reducer;
