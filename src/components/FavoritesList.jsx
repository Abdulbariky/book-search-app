// FavoritesList.js
import React from 'react';
import BookList from './BookList';

const FavoritesList = ({ favoriteBooks }) => {
    return (
        <div>
            <h2>My Favorite Books</h2>
            <BookList books={favoriteBooks} />
        </div>
    );
}

export default FavoritesList;
