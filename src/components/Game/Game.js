import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameResult from "../GameResult";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info("answer ", answer);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("ongoing"); // Possible states: ongoing, win, loose.

  // console.log("guesses", guesses);

  function handleSubmit(guess) {
    // console.log(`You guessed: ${guess}`);

    const newGuess = {
      name: guess,
      id: crypto.randomUUID(),
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameState("win");
    }

    if (guesses.length === 5) {
      setGameState("loose");
    }
  }

  return (
    <>
      <GameResult gameState={gameState} answer={answer} guesses={guesses} />
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
