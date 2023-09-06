import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface GobalProcessingState {
  show?: boolean;
}

const initialState: GobalProcessingState = {
  show: false,
};

export const globalProcessingSlice = createSlice({
  name: 'globalProcessing',
  initialState,
  reducers: {
    showProcessing: (state) => {
      state.show = true;
    },
    hideProcessing: (state) => {
      state.show = false;
    },
  },
});

export const { showProcessing, hideProcessing } = globalProcessingSlice.actions;

export const globalProcessingReducer = globalProcessingSlice.reducer;
