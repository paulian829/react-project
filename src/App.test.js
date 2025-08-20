import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders hello work on root path', () => {
  window.history.pushState({}, '', '/');
  const { getByText } = render(<App />);
  expect(getByText(/hello work/i)).toBeInTheDocument();
});

test('renders 404 page on unknown path', () => {
  window.history.pushState({}, '', '/random');
  const { getByText } = render(<App />);
  expect(getByText(/404 - page not found/i)).toBeInTheDocument();
});
