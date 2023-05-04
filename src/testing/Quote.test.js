import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Quote from '../pages/Quote';

describe('Quotes', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<Quote />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
