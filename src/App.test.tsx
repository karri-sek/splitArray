import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Split Array/i);
  expect(headerElement).toBeInTheDocument();
  const paragraphElement = screen.getByText(/This is simple Algorithm of splitting given array into N number of chunks/i);
  expect(paragraphElement).toBeInTheDocument();

});
