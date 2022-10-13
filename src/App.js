import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
