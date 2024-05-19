import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { dataMock } from '../../test/mocks/dataMock';

describe('Card', () => {
  test('ensure that the card component renders the relevant card data', async () => {
    render(<Card character={dataMock} />);

    const name = screen.getByText(/Rick Sanchez/i);
    const status = screen.getByText(/Human/i);
    const species = screen.getByText(/Alive/i);
    const location = screen.getByText(/Earth/i);

    expect(name).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(species).toBeInTheDocument();
    expect(location).toBeInTheDocument();
  });
});
