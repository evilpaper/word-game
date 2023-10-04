import React from "react";

function GuessResults({ results }) {
  return (
    <div>
      <div className="guess-results">
        {results.map(({ name, id }) => {
          return (
            <p key={id} className="guess">
              {name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default GuessResults;
