import axios from 'axios';
import noCoverImage from './assets/images/book-no-cover.jpg';

const BASE_URL = 'https://openlibrary.org';

export const searchBooks = async (query) => {
  const response = await axios.get(`${BASE_URL}/search.json?q=${query}`);
  return response.data.docs;
};

export const getBookDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/works/${id}.json`);
  return response.data;
};

export const getBookCover = (coverId, size = 'M') => {
  return coverId ? `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg` : noCoverImage;
};
