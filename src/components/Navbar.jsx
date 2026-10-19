import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow-sm">
      <div className="container-fluid">
        <div className="navbar-nav me-auto">
          <Link className="nav-link fw-bold" to="/movies">Movies</Link>
          <Link className="nav-link fw-bold" to="/favorites">Favorites</Link>
        </div>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link fw-bold" to="/login">Login</Link>
          <Link className="nav-link fw-bold" to="/register">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;