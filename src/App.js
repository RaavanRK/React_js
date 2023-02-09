import "./App.css";
import React from "react";
import Login from "./taskSite/Login";
import Home from "./taskSite/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./taskSite/Register";

function App() {
  return (
    <div className="App">
      {/* <Register /> */}
      {/* <Appbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
