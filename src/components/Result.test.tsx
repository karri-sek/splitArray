import React from 'react';
import { render, screen } from '@testing-library/react';
import Result from './Result';

test('renders Header component', () => {
  const result =[2,3,4,4,5];
  render(<Result result={result}/>);
  const headerElement = screen.getByText(/[2,3,4,4,5]/);
  expect(headerElement).toBeInTheDocument();
});
