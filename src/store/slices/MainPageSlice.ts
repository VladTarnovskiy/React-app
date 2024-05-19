import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface InitialState {
  page: number;
  amountPages: number | null;
  searchValue: string;
}

const initialState: InitialState = {
  page: 1,
  amountPages: null,
  searchValue: localStorage.getItem('searchValue') || '',
};

const userSlice = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    setSearchValue(state, { payload }) {
      state.searchValue = payload;
    },
    setAmountPage: (state, { payload }) => {
      state.amountPages = payload;
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
  },
});

export const { setSearchValue, changePage, setAmountPage } = userSlice.actions;

export const selectSearchValue = (state: RootState) =>
  state.mainPage.searchValue;
export const selectPage = (state: RootState) => state.mainPage.page;
export const selectAmountPages = (state: RootState) =>
  state.mainPage.amountPages;

export default userSlice.reducer;
