import React from "react";
import Guess from "../Guess/Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  return (
    <div>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => {
          return <Guess key={index} value={guesses[num]} answer={answer} />;
        })}
      </div>
    </div>
  );
}

export default GuessResults;
