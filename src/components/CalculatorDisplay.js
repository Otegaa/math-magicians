import React, { useState } from 'react';
import calculate from '../logic/calculate';

const CalculatorDisplay = () => {
  const [value, setValue] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const { total, next, operation } = value;

  const handleClick = (num) => setValue(calculate(value, num));

  return (
    <div className="container">
      <div className="display-calc line">
        <span>
          {total}
          {operation}
          {next}
        </span>
      </div>

      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        AC
      </button>
      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        +/-
      </button>
      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        %
      </button>
      <button
        type="button"
        className="btn-orange"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        &#xf7;
      </button>

      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        7
      </button>
      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        8
      </button>
      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        9
      </button>
      <button
        type="button"
        className="btn-orange"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        x
      </button>

      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        4
      </button>
      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        5
      </button>
      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        6
      </button>
      <button
        type="button"
        className="btn-orange"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        -
      </button>

      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        1
      </button>
      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        2
      </button>
      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        3
      </button>
      <button
        type="button"
        className="btn-orange"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        +
      </button>

      <button
        type="button"
        className="btn-white btn-zero"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        0
      </button>
      <button
        type="button"
        className="btn-white"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        .
      </button>
      <button
        type="button"
        className="btn-orange"
        onClick={(e) => handleClick(e.target.textContent)}
      >
        =
      </button>
    </div>
  );
};

export default CalculatorDisplay;
