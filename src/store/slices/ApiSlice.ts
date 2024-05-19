import { CharacterInfo, Character } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (builder) => ({
    getCharactersInfo: builder.query<
      CharacterInfo,
      { searchValue: string; page: number }
    >({
      query: ({ searchValue, page }) =>
        `/character/?name=${searchValue}&page=${page}`,
    }),
    getCharacterInfo: builder.query<Character, string>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useGetCharactersInfoQuery, useGetCharacterInfoQuery } = apiSlice;
