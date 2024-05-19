import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

describe('Pagination', () => {
  test('Check pagination render', async () => {
    render(
      <Provider store={store}>
        <Pagination />
      </Provider>,
      {
        wrapper: BrowserRouter,
      }
    );

    const leftButton = screen.getByAltText('Turn left');

    expect(leftButton).toBeInTheDocument();
  });
  test('check counter data', async () => {
    render(
      <Provider store={store}>
        <Pagination />{' '}
      </Provider>,
      {
        wrapper: BrowserRouter,
      }
    );

    const rightButton = screen.getByAltText('Turn right');

    fireEvent.click(rightButton);
    const pageCounter = screen.getByTestId('page-counter');

    expect(pageCounter).toHaveTextContent('1');
  });
});
