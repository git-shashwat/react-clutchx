import React from "react";
import { Book } from "../../types/searchResults";

type BookDetailsProps = Pick<Book, "volumeInfo">;

const BookDetails: React.FC<BookDetailsProps> = ({ volumeInfo }) => {
  return (
    <div>
      <h1>{volumeInfo.title}</h1>
      <p>{volumeInfo.description}</p>
    </div>
  );
};

export default BookDetails;
