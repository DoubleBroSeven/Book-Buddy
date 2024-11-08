import './App.css'
import BookDetails from './Components/BookDetailsPage';
import BookList from './Components/BookListPage'
// import MainPage from './Components/MainPage'
import NavBar from './Components/NavBar'
import { useState, useEffect } from "react";
const App = () => {
  const [allbooks, setBookList] = useState(true);
  const [bookdetail, setBookDetails] = useState({});


  return (
    <>
      <NavBar />
      {
        allbooks ?
        <BookList
          setBookList={setBookList}
          setBookDetails={setBookDetails} />:
        <BookDetails
          bookdetail={bookdetail}
          setBookList={setBookList}
        />
      }
    </>
  )
}

export default App
