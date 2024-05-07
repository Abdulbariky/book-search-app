// BookList.js
import React from 'react';

const BookList = ({ books, removeFromFavorites }) => {
  if (!books) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center space-x-4">
      {books.map((book) => (
        <div key={book.id} className="w-64 h-96 bg-white rounded shadow-md hover:shadow-lg">
          {book.volumeInfo.imageLinks && (
            <img
              src={book.volumeInfo.imageLinks.smallThumbnail}
              alt=""
              className="w-full h-48 object-cover rounded-t"
            />
          )}
          <div className="p-4">
            <h2 className="text-lg font-bold">{book.volumeInfo.title}</h2>
            <p className="text-gray-600">
              {book.volumeInfo.authors && book.volumeInfo.authors.join(', ')}
            </p>
            {/* Add remove from favorites button */}
            <button onClick={() => removeFromFavorites(book.id)}>Remove from Favorites</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
