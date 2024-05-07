import React from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

const Favorites = ({ favoriteBooks, removeFromFavorites }) => {
  return (
    <div>
      <h1>Favorites</h1>
      <button onClick={() => window.history.back()}>Go Back</button>
      <div>
        {/* Pass removeFromFavorites function to BookList */}
        <BookList books={favoriteBooks} removeFromFavorites={removeFromFavorites} />
      </div>
    </div>
  );
};

export default Favorites;
