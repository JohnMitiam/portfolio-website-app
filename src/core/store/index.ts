import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

import { globalNotificationReducer } from '@slices/globalnotification';
import { globalProcessingReducer } from '@slices/globalprocessing';
import { sessionReducer } from '@slices/session';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    globalNotification: globalNotificationReducer,
    globalProcessing: globalProcessingReducer,
  },
});
