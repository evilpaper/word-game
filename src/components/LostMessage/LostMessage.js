import React from "react";
import Puff from "../Puff/Puff";

function LostMessage({ answer }) {
  return (
    <Puff type="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Puff>
  );
}

export default LostMessage;
