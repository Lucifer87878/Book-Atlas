import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/read-books">Read Books</Link>
    </nav>
  );
};

export default Navbar;
