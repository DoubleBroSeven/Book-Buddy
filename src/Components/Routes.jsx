import { Route,Routes } from "react-router-dom"
import BookList from "./BookListPage"
import MainPage from "./MainPage"
import RegisterUser from "./RegisterNewUserPage"
import SignIn from "./SignInPage"

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/Booklist" element={<BookList />} />
        <Route path="/Register" element={<RegisterUser />} />
        <Route path="/Signin" element={<SignIn/>}/>
      </Routes>
    </> 
  )
}
export default AllRoutes