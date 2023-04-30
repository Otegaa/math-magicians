import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getQuotes = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=learning',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'RHDLyf4DRjsSHUBxCTge4Q==rSin3VvTVUJbdujG',
            },
            contentType: 'application/json',
          },
        );
        const quote = await res.json();
        setQuote(quote);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    getQuotes();
  }, []);

  return (
    <>
      {isError && <h1>Something went wrong! Try again</h1>}
      {isLoading ? (
        <h3 className="quote">Loading...</h3>
      ) : (
        <ul className="quote">
          {quote.map((q) => {
            const { quote } = q;
            return (
              <li key={quote} className="quote-list">
                {quote}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Quote;
