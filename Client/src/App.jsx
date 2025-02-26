import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Forum from "./components/Forum/Forum";
import Clubs from "./components/Clubs/Clubs";
import Career from "./components/Career/Career";
import Alumni from "./components/Alumni/Alumni";
import Login from "./components/Login/Login";
import Chat from "./components/Chat/Chat";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
