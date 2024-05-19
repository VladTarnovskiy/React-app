import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Details } from './Details';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

describe('Details', () => {
  const routes = [
    {
      path: '/details/:detailsId',
      element: (
        <Provider store={store}>
          <Details />
        </Provider>
      ),
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ['/details/1'],
  });

  test('make sure the detailed card component correctly displays the detailed card data', async () => {
    render(<RouterProvider router={router} />);

    await waitFor(() => {
      const name = screen.getByText(/Rick Sanchez/i);
      const status = screen.getByText(/Alive/i);
      const type = screen.getByText(/Human/i);
      expect(name).toBeInTheDocument();
      expect(status).toBeInTheDocument();
      expect(type).toBeInTheDocument();
    });
  });
});
