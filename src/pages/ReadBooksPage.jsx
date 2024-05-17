import React, { useContext, useEffect } from 'react';
import { BookContext } from '../context/BookContext';
import { Link } from 'react-router-dom';
import { getBookCover } from '../api';
import Rating from '../components/Rating';

const ReadBooksPage = () => {
  const { readBooks, setReadBooks } = useContext(BookContext);

  useEffect(() => {
    const savedReadBooks = JSON.parse(localStorage.getItem('readBooks'));
    if (savedReadBooks) {
      setReadBooks(savedReadBooks);
    }
  }, [setReadBooks]);

  const removeFromReadBooks = (bookKey) => {
    const updatedReadBooks = readBooks.filter(book => book.key !== bookKey);
    setReadBooks(updatedReadBooks);
    localStorage.setItem('readBooks', JSON.stringify(updatedReadBooks));
  };

  const totalBooks = readBooks.length;
  const totalPages = readBooks.reduce((acc, book) => acc + (book.pages || 0), 0);

  return (
    <div className="container">
      <h1>Read Books</h1>
      <p>Total Books Read: {totalBooks}</p>
      <p>Total Pages Read: {totalPages}</p>
      {readBooks.length > 0 ? (
        <div className="book-grid">
          {readBooks.map((book, index) => (
            <div key={`${book.key}-${index}`} className="book-card">
              <Link to={`/book/${book.key.split('/').pop()}`}>
                {book.cover_i && <img src={getBookCover(book.cover_i)} alt={book.title} />}
              </Link>
              <div>
                <h2>{book.title}</h2>
                <p>{book.review}</p>
                <Rating totalStars={5} rating={book.rating} onClick={() => {}} />
                <p>Pages: {book.pages}</p>
                <button onClick={() => removeFromReadBooks(book.key)}>Remove from Read Books</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No books read yet.</p>
      )}
    </div>
  );
};

export default ReadBooksPage;
