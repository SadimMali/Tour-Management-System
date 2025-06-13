// components/StarRating.tsx
import { Star } from 'lucide-react';
import React from 'react';

interface StarRatingProps {
  rating: number; 
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const totalStars = 5;

  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<Star key={i} className="text-yellow-400 fill-yellow-400 w-5 h-5" />);
    } else if (i === fullStars + 1 && hasHalfStar) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 text-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="half-grad">
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="transparent" stopOpacity="1" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half-grad)"
            d="M12 17.27L18.18 21 16.54 13.97
                22 9.24 14.81 8.63 12 2 9.19 8.63
                2 9.24 7.46 13.97 5.82 21z"
          />
        </svg>
      );
    } 
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default StarRating;
