import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookList from './BookList';

const SearchBook = ({ addToFavorites }) => { // Receive addToFavorites prop
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState('');
  
  useEffect(() => {
    getBooks();
  }, [input]);

  const getBooks = async () => {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`);
    const data = await res.json();
    console.log(data.items);
    if (data.items) {
      setBooks(data.items);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-lg mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-2 pl-10 text-sm text-gray-700"
            placeholder="Search for books"
          />
        </div>
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
                {/* Add addToFavorites button */}
                <button onClick={() => addToFavorites(book)}>Add to Favorites</button> {/* Use addToFavorites prop */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link to="/favorites">View Favorites</Link>
      </div>
    </div>
  );
};

export default SearchBook;
