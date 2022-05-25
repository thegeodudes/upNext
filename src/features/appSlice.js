import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shows: {},
  loggedIn: true,
  userId: 1,
  searchResults: {},
  favoriteShows: [],
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
    saveSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    saveFavoriteShows(state, action) {
      state.favoriteShows = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

export const {
  addToFavorites,
  setLogin,
  saveSearchResults,
  saveFavoriteShows,
} = actions;

export default reducer;
