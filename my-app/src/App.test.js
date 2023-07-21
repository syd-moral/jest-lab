import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);

  userEvent.click(screen.getByTestId("checkbox"));
  expect(screen.getByTestId("checkbox")).not.toBeChecked();


});

test('testing for Hello World', () => {
  expect(screen.getByTestId("hello"));
})