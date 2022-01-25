import React, { useEffect } from "react";
import { AiOutlineDownload, AiOutlineShopping } from "react-icons/ai";
import { connect } from "react-redux";
import { useParams, withRouter } from "react-router";
import { Link } from "react-router-dom";
import { getBookById } from "../../redux/books/books.utils";
import { RootState } from "../../redux/root/root.reducer";
import StarRating from "../StarRating/StarRating";
import { IBookDetailsProps } from "./BookDetails.types";

const BookDetails: React.FC<IBookDetailsProps> = ({
  books: { booksList },
  history,
}) => {
  const params = useParams<{ id: string }>();
  const book = getBookById(booksList, params.id);

  useEffect(() => {
    if (!booksList) {
      history.push("/");
    }
  }, [booksList, history]);

  return (
    <div className='min-h-screen px-4 py-4 md:px-40 md:pb-20 md:w-full md:table  bg-black-98'>
      <div className='md:px-0 md:mt-4 text-primary-blue hover:underline hover:underline-offset-1'>
        <Link to='/'>{"<"} Back</Link>
      </div>
      <div className='container flex flex-col justify-center items-center gap-4 lg:flex-row lg:justify-between px-8 py-4 lg:px-48 lg:py-16 bg-black-100 shadow-inner rounded-lg text-left shadow-black-95'>
        <div className='flex flex-col lg:w-1/3'>
          <img
            src={
              `https://books.google.com/books/content?id=${params.id}&printsec=frontcover&img=1&zoom=10&edge=curl&source=gbs_api` ||
              book?.volumeInfo?.imageLinks?.smallThumbnail
            }
            loading='lazy'
            className='h-full'
            alt='book'
          />
          <div className='mt-8 w-full border-t border-black-85' />
          <div className='flex justify-between gap-4 flex-wrap'>
            <p className='text-black-12 mt-2'>
              {book?.volumeInfo?.pageCount} Pages
            </p>
            <div className='mt-2'>
              <StarRating averageRating={book?.volumeInfo.averageRating || 0} />
            </div>
            <p className='text-black-12 mt-2 text-right'>
              {book?.volumeInfo?.ratingsCount} Reviews
            </p>
          </div>
        </div>
        <div className='flex flex-col lg:w-1/2'>
          <h1 className='font-semibold text-4xl tracking-tight text-black-12 mb-4'>
            {book?.volumeInfo?.title}
          </h1>
          <h2 className='font-medium text-xl tracking-tight text-black-30 mb-4'>
            {book?.volumeInfo.subtitle}
          </h2>
          <p className='text-black-30'>
            <span className='font-semibold'>By</span> -{" "}
            {book?.volumeInfo?.authors?.join(", ") || "No author"}
          </p>
          <div className='flex flex-row flex-wrap gap-2 mb-2'>
            <p className='text-black-30'>
              <span className='font-semibold'>Published By</span> -{" "}
              {book?.volumeInfo?.publisher || "No publisher"},
            </p>
            <p className='text-black-30'>
              {book?.volumeInfo?.publishedDate || "No published date"}
            </p>
          </div>
          <p className='text-black-30 text-lg'>
            {book?.volumeInfo?.description}
          </p>
          <div className='mt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4'>
            <div className='flex flex-col '>
              {book?.accessInfo?.epub?.isAvailable && (
                <a
                  className='flex items-center gap-1 text-primary-blue hover:underline hover:underline-offset-1'
                  href={book?.accessInfo?.epub?.acsTokenLink}
                >
                  <span>
                    <AiOutlineDownload />
                  </span>{" "}
                  Download as EPUB
                </a>
              )}
              {book?.accessInfo?.pdf?.isAvailable && (
                <a
                  className='flex items-center gap-1 text-primary-blue hover:underline hover:underline-offset-1'
                  href={book?.accessInfo?.pdf?.acsTokenLink}
                >
                  <span>
                    <AiOutlineDownload />
                  </span>{" "}
                  Download as PDF
                </a>
              )}
            </div>
            <div className='flex flex-col'>
              <a
                href={book?.saleInfo?.buyLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className='flex gap-2 items-center bg-primary-blue w-max px-4 py-3 rounded text-black-100 tracking-wide'>
                  <span>
                    <AiOutlineShopping />
                  </span>
                  Buy Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  books: state.books,
});

export default withRouter(connect(mapStateToProps)(BookDetails));
