import React from "react";
import { AiFillStar } from "react-icons/ai";
import _ from "lodash";

interface StarRatingProps {
  averageRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ averageRating }) => {
  const fullStar = Math.trunc(averageRating || 0);
  let partialStar = averageRating % 1,
    temp = partialStar;

  return (
    <div className='flex gap-1'>
      {_.range(1, 6).map((rate: number) => (
        <div
          className='bg-black-85 flex justify-center items-center p-1 rounded text-black-100'
          key={rate}
          style={{
            background: `${
              rate <= fullStar
                ? `#ffd700`
                : Math.ceil(--temp) === 0
                ? `linear-gradient(to right, #ffd700 ${Math.trunc(
                    partialStar * 100
                  )}%, #f2f2 50%)`
                : ""
            }`,
          }}
        >
          <AiFillStar />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
