import { RouteComponentProps } from "react-router";
import { IBooksState } from "../../redux/books/books.types";
import { Book } from "../../types/searchResults";

type VolumeInfo = Pick<Book, "volumeInfo">;

export interface IBookDetailsProps extends RouteComponentProps {
  id: string;
  volumeInfo: VolumeInfo;
  books: IBooksState;
}
