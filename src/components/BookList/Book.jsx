import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import coverImg from "../../images/cover_not_found.jpg";
import { useGlobalContext } from '../../context.';

const Book = ({ id, cover_img, title, author, edition_count, first_publish_year }) => {
  const { addToCollection } = useGlobalContext();

  const handleAddToCollection = () => {
    addToCollection({
      id,
      cover_img,
      title,
      author,
      edition_count,
      first_publish_year
    });
  };

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={cover_img || coverImg} alt="cover" />
      </div>
      <div className='book-item-info text-center'>
        <div className='book-item-info-item title fw-7 fs-18'>
          <span>{title}</span>
        </div>
        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{author? author.join(", ") : 'Unknown'}</span>
        </div>
        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{edition_count}</span>
        </div>
        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{first_publish_year}</span>
        </div>
        <div className='book-item-buttons'>
          <button className="btn btn-add-collection" onClick={handleAddToCollection}>Add to My Collection</button>
          <Link to={`/book/${id}`} className="btn btn-see-details">See Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Book;