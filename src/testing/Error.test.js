// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Error from '../pages/Error';

it('renders correctly', () => {
  const tree = renderer.create(<Error />).toJSON();
  expect(tree).toMatchSnapshot();
});
