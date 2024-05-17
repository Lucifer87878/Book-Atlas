import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { BookProvider } from './context/BookContext';
import './styles/styles.scss'; 

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <BookProvider>
    <App />
  </BookProvider>
);
