import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchBooks, getBookCover } from '../api';
import Loader from '../components/Loader/Loader';
import '../styles/HomePage.scss';

const HomePage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedQuery = localStorage.getItem('bookSearchQuery');
    const savedBooks = JSON.parse(localStorage.getItem('bookSearchResults'));
    if (savedQuery) {
      setQuery(savedQuery);
    }
    if (savedBooks) {
      setBooks(savedBooks);
    }
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    const results = await searchBooks(query);
    setBooks(results);
    localStorage.setItem('bookSearchQuery', query);
    localStorage.setItem('bookSearchResults', JSON.stringify(results));
    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="homepage">
      <div className="hero">
        <div className="search-container">
          <h1>Search for your new Book</h1>
          <input 
            type="text" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="container" style={{ position: 'relative', minHeight: '400px' }}>
        {loading ? (
          <Loader />
        ) : (
          <div className="book-grid">
            {books.map(book => (
              <div key={book.key} className="book-card">
                <Link to={`/book/${book.key.split('/').pop()}`}>
                  <img src={getBookCover(book.cover_i)} alt={book.title} />
                  <h2>{book.title}</h2>
                  <p>{book.author_name?.join(', ')}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
