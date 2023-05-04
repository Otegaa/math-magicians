// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SharedLayout from '../components/SharedLayout';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <SharedLayout />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
