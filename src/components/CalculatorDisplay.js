import React, { useState } from 'react';

const CalculatorDisplay = () => {
  const [value, setValue] = useState([0]);

  const handleClick = (num) => (value[0] === 0 ? setValue(num) : setValue([...value, num]));

  return (
    <div className="container">
      <div className="display-calc line">
        <span>{value}</span>
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
