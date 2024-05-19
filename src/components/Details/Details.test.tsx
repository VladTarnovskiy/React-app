import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { Details } from './Details';
import { dataMock } from '../../test/mocks/dataMock';
import mockRouter from 'next-router-mock';

describe('Details', () => {
  mockRouter.push('/details/1');

  test('make sure the detailed card component correctly displays the detailed card data', async () => {
    render(<Details characterInfo={dataMock} />);
    const name = screen.getByText(/Rick Sanchez/i);
    const status = screen.getByText(/Alive/i);
    const type = screen.getByText(/Human/i);
    expect(name).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(type).toBeInTheDocument();
  });

  test('make sure the detailed card component closed', async () => {
    render(<Details characterInfo={dataMock} />);
    const button = screen.getByTestId('close-details');
    fireEvent.click(button);
    expect(button).toBeEnabled();
  });
});
