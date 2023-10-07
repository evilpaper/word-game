import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import WonMessage from "../WonMessage/WonMessage";
import LostMessage from "../LostMessage/LostMessage";
import GuessResults from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info("answer ", answer);

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("ongoing"); // Possible states: ongoing, won, lost.

  function handleSubmit(guess) {
    const newGuess = {
      name: guess,
      id: crypto.randomUUID(),
    };

    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameState("won");
    }

    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameState("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput gameState={gameState} handleSubmit={handleSubmit} />
      {gameState === "won" && <WonMessage numberOfGuesses={guesses.length} />}
      {gameState === "lost" && <LostMessage answer={answer} />}
    </>
  );
}

export default Game;
