import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favourite: [],
  },
  reducers: {
    addCarFav: {
      reducer(state, action) {
        state.favourite.push(action.payload);
      },
    },
    deleteCarFav: {
      reducer(state, action) {
        const index = state.favourite.indexOf(action.payload);
        state.favourite.splice(index, 1);
      },
    },
  },
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const carsReducer = carsSlice.reducer;
export const { addCarFav, deleteCarFav } = carsSlice.actions;
