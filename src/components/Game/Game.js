import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);

function Game() {
  function handleSubmit(guess) {
    console.log(`You guessed: ${guess}`);
    if (guess === answer) {
      alert("Correct!");
    } else {
      alert("Incorrect!");
    }
  }

  return (
    <>
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
