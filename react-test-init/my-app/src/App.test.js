import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './Login';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('should show login form', () => {
  render(<Login />)
  const input = screen.getByLabelText('Username')
  expect(input).toBeDefined()
  // Events and assertions...
})
