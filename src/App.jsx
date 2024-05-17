import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import FavoritesPage from './pages/FavoritesPage';
import ReadBooksPage from './pages/ReadBooksPage';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/read-books" element={<ReadBooksPage />} />
      </Routes>
    </Router>
  );
};

export default App;
