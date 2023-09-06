import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface SessionState {
  userid: string;
  fullname: string;
  email: string;
  portal: string;
  roles: string[];
  token: string;
}

const initialState: SessionState = {
  userid: '',
  fullname: '',
  email: '',
  portal: '',
  roles: [],
  token: '',
};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    setSession: (state, action: PayloadAction<SessionState>) => {
      state.userid = action.payload.userid;
      state.fullname = action.payload.fullname;
      state.email = action.payload.email;
      state.portal = action.payload.portal;
      state.roles = action.payload.roles;
      state.token = action.payload.token;
    },
  },
});

export const { setSession } = sessionSlice.actions;

export const sessionReducer = sessionSlice.reducer;
