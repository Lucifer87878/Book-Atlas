import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails, getBookCover } from '../api';
import { BookContext } from '../context/BookContext';
import Rating from '../components/Rating';
import Loader from '../components/Loader/Loader';
import '../styles/BookPage.scss'; 

const BookPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const { favorites, setFavorites, readBooks, setReadBooks } = useContext(BookContext);

  useEffect(() => {
    const fetchBook = async () => {
      const data = await getBookDetails(id);
      setBook(data);
      if (data.number_of_pages) {
        setPages(data.number_of_pages);
      }
      setLoading(false);
    };
    fetchBook();
  }, [id]);

  const addToFavorites = () => {
    if (!favorites.some(fav => fav.key === book.key)) {
      const updatedFavorites = [...favorites, { ...book, cover_i: book.covers ? book.covers[0] : null }];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const removeFromFavorites = () => {
    const updatedFavorites = favorites.filter(fav => fav.key !== book.key);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const addToReadBooks = () => {
    if (!readBooks.some(rb => rb.key === book.key)) {
      const updatedReadBooks = [...readBooks, { ...book, review, rating, pages, cover_i: book.covers ? book.covers[0] : null }];
      setReadBooks(updatedReadBooks);
      localStorage.setItem('readBooks', JSON.stringify(updatedReadBooks));
    }
  };

  const handleRatingClick = (starIndex) => {
    setRating(starIndex);
  };

  const isFavorite = favorites.some(fav => fav.key === book?.key);

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        book && (
          <>
            <h1>{book.title}</h1>
            <img className="book-cover" src={getBookCover(book.covers ? book.covers[0] : null)} alt={book.title} />
            <p>{book.description}</p>
            {isFavorite ? (
              <button onClick={removeFromFavorites}>Remove from Favorites</button>
            ) : (
              <button onClick={addToFavorites}>Add to Favorites</button>
            )}
            <section className="mark-as-read-section">
              <h2>Mark as Read</h2>
              <label>
                Review:
                <textarea value={review} onChange={(e) => setReview(e.target.value)} placeholder="Review"></textarea>
              </label>
              <label>
                Rating:
                <Rating totalStars={5} rating={rating} onClick={handleRatingClick} />
              </label>
              <label>
                Pages:
                <input type="number" value={pages} onChange={(e) => setPages(Number(e.target.value))} placeholder="Pages" />
              </label>
              <button onClick={addToReadBooks}>Add to Read Books</button>
            </section>
          </>
        )
      )}
    </div>
  );
};

export default BookPage;
