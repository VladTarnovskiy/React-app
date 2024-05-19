import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import mockRouter from 'next-router-mock';

describe('Search bar', () => {
  mockRouter.push('/?search=Rick');

  test('check that the component retrieves the value from url', () => {
    render(<SearchBar />);

    const searchBar = screen.getByPlaceholderText('Search') as HTMLInputElement;
    expect(searchBar.value).toBe('Rick');
  });

  test('verify that clicking the Search button saves the entered value to the url', async () => {
    render(<SearchBar />);

    const searchBar = screen.getByPlaceholderText('Search');
    const button = screen.getByTestId('searchButton');

    fireEvent.change(searchBar, { target: { value: 'Rick' } });
    fireEvent.click(button);

    const { search } = mockRouter.query;
    expect(search).toBe('Rick');
  });
});
