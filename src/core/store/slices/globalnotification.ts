import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface GobalNotificationState {
  show?: boolean;
  title: string;
  subtitle?: string;
  type?: 'error' | 'info' | 'success' | 'none';
}

const initialState: GobalNotificationState = {
  show: false,
  title: '',
  subtitle: undefined,
  type: 'none',
};

export const globalNotificationSlice = createSlice({
  name: 'globalNotification',
  initialState,
  reducers: {
    showNotification: (
      state,
      action: PayloadAction<GobalNotificationState>
    ) => {
      state.show = true;
      state.title = action.payload.title;
      state.subtitle = action.payload.subtitle;
      state.type = action.payload.type;
    },
    hideNotification: (state) => {
      state.show = false;
      state.title = '';
      state.subtitle = '';
      state.type = 'none';
    },
  },
});

export const { showNotification, hideNotification } =
  globalNotificationSlice.actions;

export const globalNotificationReducer = globalNotificationSlice.reducer;
