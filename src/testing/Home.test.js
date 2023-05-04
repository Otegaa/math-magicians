import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Home from '../pages/Home';

describe('Home', () => {
  it('Should display welcome page and paragraph', () => {
    const { container } = render(<Home />);
    const p = container.getElementsByClassName('welcome');
    expect(p.textContent).not.toBe('');
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
