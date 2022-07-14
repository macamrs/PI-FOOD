import { render, screen } from '@testing-library/react';
import App from './App';
import Landing from './pages/Landing';

describe('Test App component', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
  test("renders landing page", () => {
    const landing = render(<App />)
    const text = landing.getByText(/Discover what to eat based on personal preferences and data/i);
    expect(text).toBeInTheDocument();
  });
});
