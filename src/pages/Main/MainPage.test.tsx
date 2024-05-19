import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { MainPage } from './MainPage';

describe('Main page', () => {
  const routes = [
    {
      path: '/',
      element: (
        <Provider store={store}>
          <MainPage />
        </Provider>
      ),
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/'],
  });
  test('verify that the component renders the specified number of cards', async () => {
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      const card = screen.getAllByTestId('card');
      const name = screen.getByText(/Rick Sanchez/i);
      const status = screen.getByText(/Alive/i);
      expect(name).toBeInTheDocument();
      expect(status).toBeInTheDocument();
      expect(card.length).toBe(2);
    });
  });
});
