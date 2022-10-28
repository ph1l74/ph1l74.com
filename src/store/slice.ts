import { createSlice } from '@reduxjs/toolkit';
import { initState } from '../constants';

const slice = createSlice({
  name: 'slice',
  initialState: initState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export default slice.reducer;
export const { setCurrentPage } = slice.actions;
