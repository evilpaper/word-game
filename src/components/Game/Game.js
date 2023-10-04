import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info(answer);

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  console.log(guesses);

  function handleSubmit(guess) {
    console.log(`You guessed: ${guess}`);

    const newGuess = {
      name: guess,
      id: crypto.randomUUID(),
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    // if (guess === answer) {
    //   alert("Correct!");
    // } else {
    //   alert("Incorrect!");
    // }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
