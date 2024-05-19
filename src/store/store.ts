import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/ApiSlice';
import mainPageReducer from './slices/MainPageSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    mainPage: mainPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
