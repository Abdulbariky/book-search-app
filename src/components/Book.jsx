// Book.js (Updated)
import React from 'react';
import FavoriteButton from './FavoriteButton';

const Book = ({ book, onToggleFavorite }) => {
    const { volumeInfo } = book;

    return (
        <div className="book">
            <h2>{volumeInfo.title}</h2>
            <p>Author: {volumeInfo.authors?.join(', ')}</p>
            {/* Display other book information */}
            <FavoriteButton book={book} onToggleFavorite={onToggleFavorite} />
        </div>
    );
}

export default Book;
