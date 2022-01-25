import { Book } from "../../types/searchResults";

// STATE INTERFACE
export interface IBooksState {
  isFetching: boolean;
  booksList: Book[];
  errorMessage: string;
  searchTerm: string;
}

// ACTION TYPES
export const FETCH_BOOKS_LIST_START = "FETCH_BOOKS_LIST_START";
export const FETCH_BOOKS_LIST_SUCCESS = "FETCH_BOOKS_LIST_SUCCESS";
export const FETCH_BOOKS_LIST_FAILURE = "FETCH_BOOKS_LIST_FAILURE";
export const SET_SEARCH_TERM = "SET_SEARCH_TERM";

// ACTION INTERFACES
interface IFetchBooksListStart {
  type: typeof FETCH_BOOKS_LIST_START;
  payload: string;
}

interface IFetchRestaurantsListSuccess {
  type: typeof FETCH_BOOKS_LIST_SUCCESS;
  payload: Book[];
}

interface IFetchRestaurantsListFailure {
  type: typeof FETCH_BOOKS_LIST_FAILURE;
  payload: string;
}

interface ISetSearchTerm {
  type: typeof SET_SEARCH_TERM;
  payload: string;
}

export type BooksActionTypes =
  | IFetchBooksListStart
  | IFetchRestaurantsListSuccess
  | IFetchRestaurantsListFailure
  | ISetSearchTerm;
