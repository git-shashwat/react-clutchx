import { BooksActionTypes } from "../../redux/books/books.types";
import { RootState } from "../../redux/root/root.reducer";

export interface IBookWindowProps extends RootState {
  fetchBooksListStart: (searchTerm: string) => BooksActionTypes;
  setSearchTerm: (searchTerm: string) => BooksActionTypes;
}
