import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header component', () => {
  render(<Header />);
  const headerElement = screen.getByText(/vestiaire/i);
  expect(headerElement).toBeInTheDocument();
});
