import { useState, useEffect } from 'react';
import { searchBooks } from '../api';

const useFetchBooks = (query) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (query) {
        const results = await searchBooks(query);
        setBooks(results);
      }
    };
    fetchBooks();
  }, [query]);

  return books;
};

export default useFetchBooks;
