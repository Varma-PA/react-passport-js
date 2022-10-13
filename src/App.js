import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Post from "./pages/Post";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  // const [user, setUser] = useState(false);

  const user = true;

  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/post/:id"
            element={user ? <Post /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
