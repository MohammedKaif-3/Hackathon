import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">University Hub</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
        <li><Link to="/career">Career</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
