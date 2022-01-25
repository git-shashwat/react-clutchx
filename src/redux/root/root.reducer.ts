import { combineReducers } from "redux";
import { bookReducer } from "../books/books.reducer";

export const rootReducer = combineReducers({
  books: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
