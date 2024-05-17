import React, { createContext, useState, useEffect } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
    const savedReadBooks = JSON.parse(localStorage.getItem('readBooks'));
    if (savedReadBooks) {
      setReadBooks(savedReadBooks);
    }
  }, []);

  return (
    <BookContext.Provider value={{ favorites, setFavorites, readBooks, setReadBooks }}>
      {children}
    </BookContext.Provider>
  );
};
