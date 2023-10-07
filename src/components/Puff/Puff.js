import React from "react";

function Puff({ type, children }) {
  return <div className={`${type} banner`}>{children}</div>;
}

export default Puff;
