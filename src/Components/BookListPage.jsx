import BookDetails from './BookDetailsPage';
import { useState, useEffect } from "react";

const BookList = () => {
  const [allbooks, setBookList] = useState(true);
  const [books, setBooks] = useState([]);
  const [bookdetail, setBookDetails] = useState({});
  
  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
      const result = await response.json();
      setBooks(result.books);
    }
    getBooks();
  }, []);
  
  const clickedUser = (book) => {
    setBookList(false);
    setBookDetails(book);
  }
  
  return (
    <>
      {
        allbooks ?
          <ol>
            {
              books.map((singleBook) => {
                return <li
                  key={singleBook.id}
                  onClick={() => clickedUser(singleBook)}
                >
                  {singleBook.title}
                </li>
              })
            }
          </ol> :
          <BookDetails
            bookdetail={bookdetail}
            setBookList={setBookList}
          />
      }
    </>
  )
};

export default BookList