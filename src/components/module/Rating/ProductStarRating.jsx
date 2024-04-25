import React from 'react';
import StarRatings from 'react-star-ratings';

const ProductStarRating = ({ rating, onRatingChange }) => {
  return (
    <div>
      <StarRatings
        rating={rating}
        starRatedColor="gold" 
        changeRating={onRatingChange} 
        numberOfStars={5}
        starDimension="20px"
        starSpacing="3px"
      />
    </div>
  );
}

export default ProductStarRating;
