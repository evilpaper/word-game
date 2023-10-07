import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  const result = value?.name ? checkGuess(value?.name, answer) : null;

  const guess = range(5).map((num) => {
    return value ? { letter: value.name[num], status: result[num].status } : "";
  });

  return (
    <p className="guess">
      {guess.map((slot, index) => {
        const letter = slot?.letter;

        const classNames = `cell ${letter && slot.status}`;
        return (
          <span key={index} className={classNames}>
            {letter ? letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
