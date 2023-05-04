import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home', () => {
  it('Should display welcome page and paragraph', () => {
    const { container } = render(<Home />);
    const p = container.getElementsByClassName('welcome');
    expect(p.textContent).not.toBe('');
  });
});
