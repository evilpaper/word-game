import React from "react";

function Win({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {guesses.length} guesses</strong>.
      </p>
    </div>
  );
}

function Loose({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function GameResult({ gameState, answer, guesses }) {
  return (
    <>
      {gameState === "win" && <Win guesses={guesses} />}
      {gameState === "loose" && <Loose answer={answer} />}
    </>
  );
}

export default GameResult;
