import React from "react";
import { useState } from "react";

function Count() {
  let [first, setfirst] = useState(0);
  return (
    <div>
      <h1> {first} </h1>
      <button
        onClick={() => {
          setfirst(++first);
        }}
      >
        increament
      </button>
      <button
        onClick={() => {
          first > 0 ? setfirst(--first) : setfirst(0);
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default Count;
