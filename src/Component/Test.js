import React from "react";

export const Test = ({ variable }) => {
  if (variable === "joker") {
    throw new Error("error name for console");
  }

  return <div>{variable}</div>;
};

export default Test;
