import React, { useContext, useEffect } from 'react';
import { BookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';
import { getBookCover } from '../api';

const FavoritesPage = () => {
  const { favorites, setFavorites } = useContext(BookContext);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites'));
    if (savedFavorites) {
      setFavorites(savedFavorites);
    }
  }, [setFavorites]);

  const removeFromFavorites = (bookKey) => {
    const updatedFavorites = favorites.filter(book => book.key !== bookKey);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container">
      <h1>Favorite Books</h1>
      {favorites.length > 0 ? (
        <div className="book-grid">
          {favorites.map((book, index) => (
            <div key={`${book.key}-${index}`} className="book-card">
              <Link to={`/book/${book.key.split('/').pop()}`}>
                {book.cover_i && <img src={getBookCover(book.cover_i)} alt={book.title} />}
                <h2>{book.title}</h2>
                <p>{book.author_name?.join(', ')}</p>
              </Link>
              <button onClick={() => removeFromFavorites(book.key)}>Remove from Favorites</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite books yet.</p>
      )}
    </div>
  );
};

export default FavoritesPage;
