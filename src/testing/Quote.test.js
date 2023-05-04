import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('Quotes', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<Quote />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
