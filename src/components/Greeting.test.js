import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting', () => {
  test('Whether we have Hello World', () => {
    // Arrange
    render(<Greeting />);

    // Act - Nothing

    // Assert
    const h2El = screen.getByText('Hello World', { exact: false });
    expect(h2El).toBeInTheDocument();
  });

  test('Button was not clicked', () => {
    render(<Greeting />);
    const pEl = screen.getByText('good to see you', { exact: false });
    expect(pEl).toBeInTheDocument();
  });

  test('Button was clicked', () => {
    // arrange
    render(<Greeting />);

    // act
    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);

    // assert
    const pEl = screen.getByText('Changed', { exact: false });
    expect(pEl).toBeInTheDocument();
  });
});
