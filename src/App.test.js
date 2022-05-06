import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Supabase import text', () => {
  render(<App />);
  const textElement = screen.getByText(/Supabase import/i);
  expect(textElement).toBeInTheDocument();
});
