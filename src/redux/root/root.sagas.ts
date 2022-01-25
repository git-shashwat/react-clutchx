import { all, call } from "redux-saga/effects";
import { booksSaga } from "../books/books.sagas";

export default function* rootSaga() {
  yield all([call(booksSaga)]);
}
