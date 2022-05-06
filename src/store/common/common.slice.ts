import { createSlice } from '@reduxjs/toolkit';
import { CommonState } from 'types/common';

const initialState: CommonState = {
  user: null
};

export const commonSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = commonSlice.actions;

export default commonSlice.reducer;
