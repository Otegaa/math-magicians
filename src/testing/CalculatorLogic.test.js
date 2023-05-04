import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('calculate testing', () => {
  it('should return an object with null values for total, next, and operation when buttonName is "AC"', () => {
    const result = calculate({}, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  it('should perform calculation when buttonName is "="', () => {
    const result = calculate({ total: '2', next: '3', operation: '+' }, '=');
    expect(result).toEqual({ total: '5', next: null, operation: null });
  });
});

describe('operate testing', () => {
  it('should return a sum if "+" is assigned between two numbers', () => {
    const result = operate(1, 5, '+');
    expect(result).toEqual('6');
  });

  it('should return a multiplication if "x" is assigned between two numbers', () => {
    const result = operate(10, 3, 'x');
    expect(result).toEqual('30');
  });

  it('should return a subtraction if "-" is assigned between two numbers', () => {
    const result = operate(10, 3, '-');
    expect(result).toEqual('7');
  });

  it('should return a subtraction if "÷" is assigned between two numbers', () => {
    const result = operate(10, 5, '÷');
    expect(result).toEqual('2');
  });
});
