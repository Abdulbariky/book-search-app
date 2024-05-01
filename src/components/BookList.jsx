const BookList = ({books}) => {
    return ( <div>
        {books.map((book) =>(
              <div className="book-container">
                {book.volumeInfo.imageLinks && <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />}
                             
          </div>
        ))}      
    </div> );
}
 
export default BookList;