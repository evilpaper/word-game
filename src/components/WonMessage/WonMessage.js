import React from "react";
import Puff from "../Puff/Puff";

function WonMessage({ numberOfGuesses }) {
  return (
    <Puff type="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfGuesses === 1 ? "1 guess" : `${numberOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Puff>
  );
}

export default WonMessage;
