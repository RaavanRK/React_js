import React from "react";
import ComponentD from "./ComponentD";

function ComponentC() {
  return (
    <div>
      {" "}
      <h3>ComponentC is calling to</h3>
      <ComponentD />
    </div>
  );
}

export default ComponentC;
