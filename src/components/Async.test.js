import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async', () => {
  test('should render Posts if request succeed ', async () => {
    window.fetch = jest.fn();
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First post' }],
    });

    render(<Async />);

    const liElements = await screen.findAllByRole('listitem');
    expect(liElements).not.toHaveLength(0);
  });
});
