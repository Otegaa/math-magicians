import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import CalculatorDisplay from '../components/CalculatorDisplay';

describe('Calculator', () => {
  it('Should render correctly', () => {
    const { getByText } = render(<CalculatorDisplay />);
    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('+/-')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('÷')).toBeInTheDocument();
    expect(getByText('x')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
  });
});

test('should change symbol when the "+/-" button is clicked', () => {
  const { getByText } = render(<CalculatorDisplay />);
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('+/-'));
  expect(getByText('-9')).toBeInTheDocument();
});
