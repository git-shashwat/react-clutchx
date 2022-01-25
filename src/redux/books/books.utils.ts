import { Book } from "../../types/searchResults";

export const getBookById = (booksList: Book[], id: string) => {
  const book = booksList.find((book) => book.id === id);
  return book;
};
