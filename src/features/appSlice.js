import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shows: {},
  loggedIn: false,
  searchResults: [],
};

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
    returnSearchResults(state, action) {
      state.searchResults = action.payload;
    }
  },
});

const { actions, reducer } = appSlice;

export const {
  addToFavorites,
  setLogin,
  returnSearchResults,
} = actions;

export default reducer;
