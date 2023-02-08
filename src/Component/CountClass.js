import { red } from "@mui/material/colors";
import React, { Component } from "react";

export default class CountClass extends Component {
  constructor() {
    super();
    this.state = { color1: "red", color2: "green" };
  }

  render() {
    return (
      <>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: this.state.color1,
              margin: "2rem",
            }}
          ></div>
          <div
            style={{
              width: "200px",
              height: "200px",
              backgroundColor: this.state.color2,
              margin: "2rem",
            }}
          ></div>
        </div>
        <button
          onClick={() => {
            this.setState({ color1: "green", color2: "red" });
          }}
        >
          change color
        </button>
        <button
          onClick={() => {
            this.setState({ color1: "red", color2: "green" });
          }}
        >
          reset
        </button>
      </>
    );
  }
}
