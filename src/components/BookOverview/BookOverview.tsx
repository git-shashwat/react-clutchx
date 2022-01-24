import React from "react";
import { Book } from "../../types/searchResults";

type BookOverviewProps = Pick<Book, "volumeInfo">;

const BookOverview: React.FC<BookOverviewProps> = ({ volumeInfo }) => {
  return (
    <div className='px-4 py-5 bg-black-95 cursor-pointer'>
      <p className='text-black-12'>{volumeInfo.title}</p>
      <p className='text-black-12'>{volumeInfo.authors}</p>
      <p className='text-black-12'>{volumeInfo.publishedDate}</p>
    </div>
  );
};

export default BookOverview;
