import React from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  return (
    <div>
      {" "}
      <h1>ComponentA is calling to</h1> <ComponentB />
    </div>
  );
}

export default ComponentA;
