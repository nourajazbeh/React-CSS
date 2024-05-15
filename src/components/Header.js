import React from "react";
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <nav className="flex justify-around">
        <NavLink to="/" exact activeClassName="text-yellow-500">Home</NavLink>
        <NavLink to="/about" activeClassName="text-yellow-500">About</NavLink>
        <NavLink to="/contact" activeClassName="text-yellow-500">Contact</NavLink>
        <NavLink to="/login" activeClassName="text-yellow-500">Login</NavLink>
      </nav>
    </header>
  );
};

export default Header;
