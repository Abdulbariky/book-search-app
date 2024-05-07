import './App.css';
import SearchBook from './components/SearchBook';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Favorites from './components/Favorites';
import React, { useState } from 'react'; // Import useState

function App() {
  // Define state for favorite books
  const [favoriteBooks, setFavoriteBooks] = useState([]);

  // Function to add a book to favorites
  const addToFavorites = (book) => {
    if (!book.id) {
      book.id = Math.random().toString(36).substr(2, 9);
    }
    setFavoriteBooks([...favoriteBooks, book]);
  };

  // Function to remove a book from favorites
  const removeFromFavorites = (bookId) => {
    setFavoriteBooks(favoriteBooks.filter(book => book.id !== bookId));
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            {/* Pass favoriteBooks and related functions as props */}
            <Route path="/" element={<SearchBook addToFavorites={addToFavorites} />} />
            <Route path="/search" element={<SearchBook addToFavorites={addToFavorites} />} />
            <Route path="/favorites" element={<Favorites favoriteBooks={favoriteBooks} removeFromFavorites={removeFromFavorites} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
