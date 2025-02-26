import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/forum" element={<h1>Forum Page</h1>} />
        <Route path="/clubs" element={<h1>Clubs Page</h1>} />
        <Route path="/career" element={<h1>Career Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
