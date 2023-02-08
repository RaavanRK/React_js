import React, { useReducer } from "react";
// single component use reducer
// let initialState=0;

// let reducer = (prevState,action)=>{
//     console.log("previous state :", prevState);
//     switch (action)
//     {case "INCRE": return prevState+1 ;
//     case "DECRE" : return prevState-1 ;
//     case "RESET" : return initialState ;
//     default : return prevState
//     }
// };

// function UseReducer() {
//     const [state, dispatch] = useReducer(reducer, initialState );

//   return (
//     <div> <h1>conter  : {state} </h1>
//     <button onClick={()=>{dispatch("INCRE")}}>increment</button>
//     <button onClick={()=>{dispatch("DECRE")}}>decrement</button>
//     <button onClick={()=>{dispatch("RESET")}}>reset</button>
//     </div>
//   )
// }

//two comp use reducer
let initialState = { firstCounter: 0, secondCounter: 0 };

let reducer = (prevState, action) => {
  console.log("action is :", action);
  switch (action.type) {
    case "INCR":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter + action.payload,
      };
    case "DECR":
      return {
        ...prevState,
        firstCounter: prevState.firstCounter - action.payload,
      };
    case "RST":
      return { ...prevState, firstCounter: initialState.firstCounter };

    case "INCR2":
      return {
        ...prevState,
        secondCounter: prevState.secondCounter + action.payload,
      };
    case "DECR2":
      return {
        ...prevState,
        secondCounter: prevState.secondCounter - action.payload,
      };
    case "RST2":
      return { ...prevState, secondCounter: initialState.secondCounter };
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1> counte 1 : {state.firstCounter} </h1>
      <button
        onClick={() => {
          dispatch({ type: "INCR", payload: 50 });
        }}
      >
        incr 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECR", payload: 30 });
        }}
      >
        decr 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RST" });
        }}
      >
        rst 1
      </button>

      <h1> counte 2 : {state.secondCounter} </h1>
      <button
        onClick={() => {
          dispatch({ type: "INCR2", payload: 5 });
        }}
      >
        incr 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECR2", payload: 3 });
        }}
      >
        decr 1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "RST2" });
        }}
      >
        rst 1
      </button>
    </div>
  );
}

export default UseReducer;
