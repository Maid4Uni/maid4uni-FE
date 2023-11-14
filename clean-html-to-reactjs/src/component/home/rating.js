import React, { useState } from "react";

const RatingStar = ({ rating, starSize }) => {
  const getStarSize = () => {
    return starSize || 24;
  };

  const getStarColor = (star, rating) => {
    return star <= rating ? "gold" : "gray";
  };

  return (
    <div className="rating-star">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star`}
          style={{ color: getStarColor(star, rating), fontSize: getStarSize() }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default RatingStar;
