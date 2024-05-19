import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/ApiSlice';
import mainPageReducer from './slices/MainPageSlice';
import { MakeStore, createWrapper } from 'next-redux-wrapper';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    mainPage: mainPageReducer,
  },
  devTools: true,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

const makeStore: MakeStore<AppStore> = () => store;
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
