import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  refresh: 0,
  shows: {},
  loggedIn: false,
  userId: 0,
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
    setUserId(state, action) {
      state.userId = action.payload;
    },
    saveSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    saveFavoriteShows(state, action) {
      state.favoriteShows = action.payload;
    },
    setRefresh(state) {
      state.refresh += 1;
    },
  },
});

const { actions, reducer } = appSlice;

export const {
  addToFavorites,
  setLogin,
  setUserId,
  saveSearchResults,
  saveFavoriteShows,
  setRefresh,
} = actions;

export default reducer;
