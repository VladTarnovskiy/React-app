import { beforeEach, describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';
import mockRouter from 'next-router-mock';

beforeEach(() => {
  mockRouter.push('/?page=2');
});

describe('Pagination', () => {
  test('Check pagination render', async () => {
    render(<Pagination amountPages={500} />);

    const leftButton = screen.getByAltText('Turn left');
    expect(leftButton).toBeInTheDocument();
  });
  test('check counter data increase', async () => {
    render(<Pagination amountPages={500} />);

    const rightButton = screen.getByAltText('Turn right');
    fireEvent.click(rightButton);
    const pageCounter = screen.getByTestId('page-counter');
    expect(pageCounter).toHaveTextContent('3');
  });

  test('check counter data decrease', async () => {
    render(<Pagination amountPages={500} />);

    const rightButton = screen.getByAltText('Turn left');
    fireEvent.click(rightButton);
    const pageCounter = screen.getByTestId('page-counter');
    expect(pageCounter).toHaveTextContent('1');
  });
});
