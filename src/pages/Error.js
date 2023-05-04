import React from 'react';

const Error = () => {
  const error = {
    marginTop: '20rem',
    fontSize: '2rem',
  };
  return (
    <section style={error}>
      <h2>404!</h2>
      <p>Page not found</p>
    </section>
  );
};

export default Error;
