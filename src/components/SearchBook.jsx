import { useEffect } from "react";
import { useState } from "react";
import BookList from "./BookList";


const SearchBook = () => {
    const [books, setBooks] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        getBooks();
    }, [input]);

    const getBooks = async () => {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${input}&key=AIzaSyDa1-TjhN4Loxp4-qQlo7eybpfbGsMIgYI`);
        const data = await res.json();
        console.log(data.items);
        if(data.items){
            setBooks(data.items);
        }
        
    }

    return (
        <>              
    <div className="input-container">
        <input type="text" value={input} 
        onChange={(e)=>{setInput(e.target.value); setInput(e.target.value);}}/>

    </div>
    <BookList books={books} />
    </> 
    );
}

export default SearchBook;