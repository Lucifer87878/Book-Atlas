# Book Atlas

## Overview

Book Atlas is a React-based application that allows users to search for books, view book details, mark books as read, and manage their favorite books. The app fetches data from the Open Library API and provides a user-friendly interface for book lovers.

## Features

- **Search for Books**: Users can search for books by title, author, or keyword.
- **View Book Details**: Detailed information about each book including title, author, cover image, and description.
- **Favorites**: Users can add books to their favorites and remove them as well.
- **Read Books**: Users can mark books as read, add a review, rating, and the number of pages read.
- **Local Storage**: Favorites and read books are saved in the local storage so that they persist between sessions.

## Technologies Used

- **React**: For building the user interface.
- **React Router**: For handling routing.
- **Context API**: For managing global state.
- **SCSS**: For styling the application.
- **Axios**: For making HTTP requests to the Open Library API.

## Setup and Installation

1. Clone the repository:

   git clone https://github.com/Lucifer87878/Book-Atlas.git
   cd Book-Atlas

2. Install the dependencies:
    npm install

3. Start the development server:
    npm run dev


***********************************************************************************************************

## Project Structure

Book-Atlas/
├── src/
│   ├── assets/
│   │   └── images/
│   │         ├── book-no-cover.jpg
│   │         └── Hero2.jpg
│   ├── components/
│   │   ├── Loader/
│   │   │     └── Loader.jsx
│   │   ├── Navbar.jsx  
│   │   └── Rating.jsx
│   ├── context/
│   │   └── BookContext.jsx
│   ├── hooks/
│   │   └── useFetchBooks.js
│   ├── pages/
│   │   ├── BookPage.jsx
│   │   ├── FavoritesPage.jsx
│   │   ├── HomePage.jsx
│   │   └── ReadBooksPage.jsx
│   ├── styles/
│   │   ├── HomePage.scss
│   │   ├── Loader.scss
│   │   ├── styles.scss
│   │   └── BookPage.scss
│   ├── api.js
│   ├── App.jsx
│   └── main.jsx
│
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

*********************************************************************************************************

### Usage
  
  * Searching for Books
    - Enter a keyword in the search bar and click the "Search" button or press "Enter".
    - The search results will be displayed in a grid.
  
  * Viewing Book Details
    - Click on a book from the search results to view its details.
    - The book details page will display the book's title, author, cover image, and description.
  
  * Adding to Favorites
    - On the book details page, click the "Add to Favorites" button to add the book to your favorites.
    - To remove a book from favorites, click the "Remove from Favorites" button.
  
  * Marking as Read
    - On the book details page, fill in the review, rating, and the number of pages read.
    - Click the "Add to Read Books" button to mark the book as read.



********************************************************************************************************


### Contributing
 * Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.


### License
 * This project is licensed under the MIT License. See the LICENSE file for more details.



### Acknowledgements
 - Open Library API
 - React
 - Vite
 - SCSS