import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  let [clr, setClr] = useState("red");

  useEffect(() => {
    setClr = () => {
      clr = "blue";
    };
  }, []);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>click</button>
      <div
        style={{
          width: "200px",
          height: "200px",
          border: "3px solid",
          backgroundColor: clr,
        }}
      ></div>
      <button onClick={() => setCount((c) => c + 1)}>click</button>
      <button onClick={() => setClr((clr) => (clr = "green"))}>
        change clr
      </button>
    </>
  );
}

export default UseEffect;
