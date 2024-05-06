import React from 'react';

const BookList = ({ books }) => {
  if (!books) {
    return null;
  }

  return (
    <div>
      {books.map((book) => (
        <div className="book-container">
          {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />}
        </div>
      ))}
    </div>
  );
}

export default BookList;
