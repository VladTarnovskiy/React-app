import { CharacterInfo, Character } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getCharactersInfo: builder.query<
      CharacterInfo,
      { searchValue: string; page: number }
    >({
      query: ({ searchValue, page }) => {
        return `/character/?name=${searchValue}&page=${page}`;
      },
    }),
    getCharacterInfo: builder.query<Character, string>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const {
  useGetCharactersInfoQuery,
  useGetCharacterInfoQuery,
  util: { getRunningQueriesThunk },
} = apiSlice;

export const { getCharactersInfo, getCharacterInfo } = apiSlice.endpoints;
