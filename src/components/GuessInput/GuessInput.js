import React from "react";

function GuessInput({ gameState, handleSubmit }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        setTentativeGuess("");
        handleSubmit(tentativeGuess);
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameState !== "ongoing"}
        maxLength={5}
        minLength={5}
        id="guess-input"
        type="text"
        pattern="[A-Za-z]{5}"
        value={tentativeGuess}
        onChange={(event) =>
          setTentativeGuess(event.target.value.toUpperCase())
        }
      />
    </form>
  );
}

export default GuessInput;
