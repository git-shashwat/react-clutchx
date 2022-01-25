import {
  IBooksState,
  BooksActionTypes,
  FETCH_BOOKS_LIST_START,
  FETCH_BOOKS_LIST_SUCCESS,
  FETCH_BOOKS_LIST_FAILURE,
  SET_SEARCH_TERM,
} from "./books.types";

const initialState: IBooksState = {
  isFetching: false,
  booksList: [],
  errorMessage: "",
  searchTerm: "",
};

export const bookReducer = (
  state = initialState,
  action: BooksActionTypes
): IBooksState => {
  switch (action.type) {
    case FETCH_BOOKS_LIST_START:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_BOOKS_LIST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        booksList: action.payload,
      };

    case FETCH_BOOKS_LIST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };

    default:
      return state;
  }
};
