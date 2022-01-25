import { connect } from "react-redux";
import React from "react";
import { Dispatch } from "redux";
import {
  fetchBooksListStart,
  setSearchTerm,
} from "../../redux/books/books.actions";
import BookOverview from "../BookOverview/BookOverview";
import { RootState } from "../../redux/root/root.reducer";
import { IBookWindowProps } from "./BookWindow.types";

const BookWindow: React.FC<IBookWindowProps> = ({
  books,
  fetchBooksListStart,
  setSearchTerm,
}) => {
  const [searchText, setSearchText] = React.useState("");

  const handleBookRequest = (searchTerm: string) => {
    if (searchTerm.length > 0) {
      setSearchTerm(searchTerm);

      fetchBooksListStart(searchTerm);
    }
  };

  return (
    <div className='md:px-40 md:pb-20 md:w-full md:table bg-black-98'>
      <div className='flex flex-col px-8 py-4 md:px-48 md:py-16 md:mt-8 bg-black-100 shadow-inner rounded-lg text-left shadow-black-95'>
        <h1 className='font-semibold text-4xl tracking-tight text-black-12 mb-4'>
          Jumbotail Library
        </h1>
        <p className='text-black-30 text-xl'>
          Simply enter a term and we will find the book you are looking for.
        </p>
        <div className='mt-12 flex flex-col gap-2 lg:w-1/3'>
          <label className='text-black-30'>Word for your interest</label>
          <input
            type='search'
            className='bg-black-100 text-black-12 border border-[#D9D9D9] px-4 py-2 rounded focus:outline-none focus:border-primary-blue'
            placeholder='Enter a term'
            results={5}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className={`mt-11 bg-primary-blue w-max px-6 py-3 rounded text-black-100 ${
              books.isFetching ? "cursor-wait" : "cursor-pointer"
            }`}
            onClick={handleBookRequest.bind(this, searchText)}
          >
            Get Books
          </button>
        </div>
        {/* horizontal divider */}
        <div className='mt-11 w-full border-t border-black-85' />
        {/* List of results */}
        {books.errorMessage && (
          <p className='text-red-100 text-xl'>{books.errorMessage}</p>
        )}
        <div className='mt-14'>
          {books.booksList.length > 0 ? (
            <div className='flex-col gap-9'>
              <div className='flex flex-col md:flex-row justify-between items-start'>
                <h5 className='text-xl text-black-12'>
                  We have found {books.booksList.length} books for “
                  {books.searchTerm}”
                </h5>
              </div>
              <div className='grid grid-cols-3 gap-x-8 mt-9 gap-y-5'>
                {books.booksList.map((result) => (
                  <BookOverview
                    key={result.id}
                    id={result.id}
                    volumeInfo={result.volumeInfo}
                  />
                ))}
              </div>
            </div>
          ) : (
            <>
              {books.isFetching ? <p>Loading...</p> : <p>No results found!</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchBooksListStart: (searchTerm: string) =>
    dispatch(fetchBooksListStart(searchTerm)),
  setSearchTerm: (searchTerm: string) => dispatch(setSearchTerm(searchTerm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookWindow);
