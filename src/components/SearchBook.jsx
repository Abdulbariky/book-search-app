// SearchBook.js
import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import SearchFilters from "./SearchFilters";
import logo from "./logo.png"; // Import your logo image

const SearchBook = () => {
    const [books, setBooks] = useState([]);
    const [input, setInput] = useState('');
    const [favoriteBooks, setFavoriteBooks] = useState([]); // new state to store favorite books

    useEffect(() => {
        getBooks();
    }, [input]);

    const getBooks = async () => {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`);
        const data = await res.json();
        console.log(data.items);
        if(data.items){
            setBooks(data.items);
        }
    };

    const toggleFavorite = (book, isFavorite) => {
        if (isFavorite) {
            // add book to favoriteBooks
            setFavoriteBooks([...favoriteBooks, book]);
        } else {
            // remove book from favoriteBooks
            setFavoriteBooks(favoriteBooks.filter((favBook) => favBook.id !== book.id));
        }
    };

    return (
        <div className="search-container">
            <img src={logo} alt="Logo" className="logo" />
            <nav>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Favorites</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div className="search-bar">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search for books..."
                />
            </div>
            <SearchFilters />
            <BookList books={books} onToggleFavorite={toggleFavorite} favoriteBooks={favoriteBooks} />
        </div>
    );
}

export default SearchBook;