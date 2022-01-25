import { Book } from "../../types/searchResults";
import {
  BooksActionTypes,
  FETCH_BOOKS_LIST_FAILURE,
  FETCH_BOOKS_LIST_START,
  FETCH_BOOKS_LIST_SUCCESS,
  SET_SEARCH_TERM,
} from "./books.types";

export const fetchBooksListStart = (searchTerm: string): BooksActionTypes => {
  return {
    type: FETCH_BOOKS_LIST_START,
    payload: searchTerm,
  };
};

export const fetchBooksListSuccess = (booksList: Book[]): BooksActionTypes => {
  return {
    type: FETCH_BOOKS_LIST_SUCCESS,
    payload: booksList,
  };
};

export const fetchBooksListFailure = (
  errorMessage: string
): BooksActionTypes => {
  return {
    type: FETCH_BOOKS_LIST_FAILURE,
    payload: errorMessage,
  };
};

export const setSearchTerm = (searchTerm: string): BooksActionTypes => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
};
