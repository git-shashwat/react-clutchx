import React from "react";
import { Book } from "../../types/searchResults";

type BookOverviewProps = Pick<Book, "volumeInfo">;

const BookOverview: React.FC<BookOverviewProps> = ({ volumeInfo }) => {
  return (
    <div className='px-4 py-5 flex flex-col justify-center items-center bg-black-95 cursor-pointer'>
      <img
        src={volumeInfo?.imageLinks?.smallThumbnail}
        className='justify-center mb-4'
        alt='book cover'
      />
      <p className='text-black-12 font-semibold text-center'>
        {volumeInfo.title}
      </p>
      <p className='text-black-12 text-center'>{volumeInfo.authors}</p>
      <p className='text-black-12 text-center'>{volumeInfo.publishedDate}</p>
    </div>
  );
};

export default BookOverview;
