import { useEffect } from "react";
import { useState } from "react";

const SearchBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=java:keyes&key=AIzaSyDa1-TjhN4Loxp4-qQlo7eybpfbGsMIgYI');
        const data = await res.json();
        console.log(data.items);
        setBooks(data.items);
    }

    return (
        <div>
            {books.map((book) => (
                <h1 key={book.id}>{book.volumeInfo.title}</h1>
            ))}
        </div>
    );
}

export default SearchBook;