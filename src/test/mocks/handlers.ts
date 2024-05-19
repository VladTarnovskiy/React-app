import { http, HttpResponse } from 'msw';
import { dataMock, dataMockItem } from './dataMock';

export const handlers = [
  http.get('https://rickandmortyapi.com/api/character', () => {
    return HttpResponse.json(dataMock);
  }),
  http.get(
    'https://rickandmortyapi.com/api/character/:detailsIdssss',
    async () => {
      return HttpResponse.json(dataMockItem);
    }
  ),
];
