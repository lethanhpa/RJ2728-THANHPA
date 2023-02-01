import React, { useState } from 'react';
import StarIcon from './StartIcon'; // import star icon

const RateButton = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (newRating: React.SetStateAction<number>) => {
    setRating(newRating);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          selected={rating >= star}
          onClick={() => handleClick(star)}
        />
      ))}
    </div>
  );
};

export default RateButton;