// FavoriteButton.js
import React, { useState } from 'react';

const FavoriteButton = ({ book, onToggleFavorite }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        onToggleFavorite(book, !isFavorite); // Notify parent component about favorite status change
    };

    return (
        <button onClick={toggleFavorite}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    );
}

export default FavoriteButton;
