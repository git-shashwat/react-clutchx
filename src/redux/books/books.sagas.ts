import axios from "axios";
import { Book } from "../../types/searchResults";
import { fetchBooksListFailure, fetchBooksListSuccess } from "./books.actions";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FETCH_BOOKS_LIST_START } from "./books.types";

type SagaProps = {
  type: typeof FETCH_BOOKS_LIST_START;
  payload: string;
};

export function* fetchBooksListAsync({ payload: query }: SagaProps) {
  try {
    const {
      data: { items },
    }: { data: { items: Book[] } } = yield axios.get(
      process.env.REACT_APP_API_URL ||
        `https://www.googleapis.com/books/v1/volumes?q=${query}`,
      {
        params: {
          q: query,
        },
      }
    );
    yield put(fetchBooksListSuccess(items));
  } catch (error) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    yield put(fetchBooksListFailure(errorMessage));
  }
}

export function* fetchBooksListStart() {
  yield takeLatest(FETCH_BOOKS_LIST_START, fetchBooksListAsync);
}

export function* booksSaga() {
  yield all([call(fetchBooksListStart)]);
}
