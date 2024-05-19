import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@/store/store';

describe('Search bar', () => {
  test('check that the component retrieves the value from the local storage upon mounting', () => {
    localStorage.setItem('searchValue', 'testValue');
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
      {
        wrapper: BrowserRouter,
      }
    );

    const searchBar = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(searchBar.value).toBe('testValue');
  });

  test('verify that clicking the Search button saves the entered value to the local storage', async () => {
    localStorage.setItem('searchValue', 'testValue');
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
      {
        wrapper: BrowserRouter,
      }
    );

    const searchBar = screen.getByPlaceholderText('Search');
    const button = screen.getByTestId('searchButton');

    fireEvent.change(searchBar, { target: { value: 'Rick' } });
    fireEvent.click(button);

    const storageValue = localStorage.getItem('searchValue');

    expect(storageValue).toBe('Rick');
  });
});
