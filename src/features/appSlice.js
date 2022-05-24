import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shows: {},
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.shows[action.payload.id] = action.payload;
    },
  },
});

const { actions, reducer } = appSlice;

export const {
  addToFavorites,
} = actions;

export default reducer;
