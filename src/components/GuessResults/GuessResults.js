import React from "react";
import Guess from "../Guess/Guess";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  return (
    <div>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
          return <Guess key={index} value={guesses[num]} />;
        })}
      </div>
    </div>
  );
}

export default GuessResults;