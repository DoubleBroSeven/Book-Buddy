import {useState, useEffect} from "react";
const BookList = ({setBookList, setBookDetails }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`);
      const result = await response.json();
      setBooks(result.books);
      console.log(result.books)
    }
    getBooks();
  }, []);
  const clickedUser = (book) => {
    setBookList(false);
    setBookDetails(book);
  }
  return (
    <>
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
      </ol>
    </>
  )
};

export default BookList