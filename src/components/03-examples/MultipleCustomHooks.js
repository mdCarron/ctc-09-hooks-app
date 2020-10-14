import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  console.log(counter);
  const { author, quote } = !!data && data[0];

  return (
    <div className="container mt-5">
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
      <button
        onClick={() => {
          increment(1);
        }}
        className="btn btn-primary"
      >
        Siguiente Frase
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
