import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { mockData } from './mock-settings-form-data';

test('Should render all setting headers success', () => {
  render(<App />);
  mockData.forEach((it) => {
    screen.getByText(it.header)
  })
});
