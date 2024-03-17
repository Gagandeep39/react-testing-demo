import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('Whether we have Hello World', () => {
  // Arrange
  render(<Greeting />);

  // Act - Nothing

  // Assert
  const h2El = screen.getByText('Hello World', { exact: false });
  expect(h2El).toBeInTheDocument();
});
