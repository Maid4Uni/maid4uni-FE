import React, { useState } from "react";

const RatingStar = ({ rating, onRatingChange, starSize }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (star) => {
    setHoverRating(star);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (star) => {
    onRatingChange(star);
  };

  const getStarSize = () => {
    return starSize || 24; 
  };

  const getStarColor = (star) => {
    if (star <= (hoverRating || rating)) {
      return "gold";
    }
    return "gray";
  };

  return (
    <div className="rating-star">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star`}
          style={{ color: getStarColor(star),
          fontSize: getStarSize()}}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStar;
