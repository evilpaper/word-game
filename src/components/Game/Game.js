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
  const [results, setResults] = React.useState([]);

  console.log(results);

  function handleSubmit(guess) {
    console.log(`You guessed: ${guess}`);

    const newResult = {
      name: guess,
      id: crypto.randomUUID(),
    };

    const nextResults = [...results, newResult];
    setResults(nextResults);

    // if (guess === answer) {
    //   alert("Correct!");
    // } else {
    //   alert("Incorrect!");
    // }
  }

  return (
    <>
      <GuessResults results={results} />
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
