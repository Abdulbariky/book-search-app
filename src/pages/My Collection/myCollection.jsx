import React, { useContext } from 'react';
import { AppContext } from '../../context.';
import { Link } from 'react-router-dom';
import "./myCollection.css";

const MyCollection = () => {
  const { collection, removeFromCollection } = useContext(AppContext);

  const handleRemoveFromCollection = (id) => {
    removeFromCollection(id);
  };

  return (
    <div className='my-collection-page'>
      <h1 className='page-title'>My Collection</h1>
      <div className='my-collection-books'>
        {collection.map((book) => (
          <div key={book.id} className='my-collection-book-item'>
            <div className='my-collection-book-item-img'>
              <img src={book.cover_img} alt="cover" />
            </div>
            <div className='my-collection-book-item-info text-center'>
              <div className='my-collection-book-item-info-item title fw-7 fs-18'>
                <span>{book.title}</span>
              </div>
              <div className='my-collection-book-item-info-item author fs-15'>
                <span className='text-capitalize fw-7'>Author: </span>
                <span>{book.author? book.author.join(", ") : 'Unknown'}</span>
              </div>
              <div className='my-collection-book-item-info-item edition-count fs-15'>
                <span className='text-capitalize fw-7'>Total Editions: </span>
                <span>{book.edition_count}</span>
              </div>
              <div className='my-collection-book-item-info-item publish-year fs-15'>
                <span className='text-capitalize fw-7'>First Publish Year: </span>
                <span>{book.first_publish_year}</span>
              </div>
              <div className='my-collection-book-item-buttons'>
                <button className="btn btn-remove-from-collection" onClick={() => handleRemoveFromCollection(book.id)}>Remove from Collection</button>
                <Link to={`/book/${book.id}`} className="btn btn-see-details">See Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="btn btn-back-to-home">
        Back to Home
      </Link>
    </div>
  );
};

export default MyCollection;