import { useEffect } from "react";
import { useState } from "react";
import BookList from "./BookList";


const SearchBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getBooks();
    }, []);

    const getBooks = async () => {
        const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=reactjs:keyes&key=AIzaSyDa1-TjhN4Loxp4-qQlo7eybpfbGsMIgYI');
        const data = await res.json();
        console.log(data.items);
        setBooks(data.items);
    }

    return (
        <div>
         <BookList books={books} />
        </div>
    );
}

export default SearchBook;