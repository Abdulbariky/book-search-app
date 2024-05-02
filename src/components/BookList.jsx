// BookList.js (Updated)
import React from 'react';
import Book from './Book';

const BookList = ({ books, onToggleFavorite }) => {
    if (!books || books.length === 0) {
        return <div>No books found.</div>;
    }

    return (
        <div>
            {books.map((book, index) => (
                <Book key={index} book={book} onToggleFavorite={onToggleFavorite} />
            ))}
        </div>
    );
}

export default BookList;
