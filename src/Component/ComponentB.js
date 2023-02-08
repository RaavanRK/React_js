import React from "react";
import ComponentC from "./ComponentC";

function ComponentB() {
  return (
    <div>
      {" "}
      <h2>ComponentB is calling</h2>
      <ComponentC />
    </div>
  );
}

export default ComponentB;
