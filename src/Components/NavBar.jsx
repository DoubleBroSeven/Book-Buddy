import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <h2>A Book A Day</h2>
      <nav>
        <div className="signin">
          <Link to="/Signin">Sign In!</Link>
          <Link to="/Register">Register</Link>
        </div>
        <div className="links">
          <Link to="/">Home!</Link>
          <Link to= "/Booklist">See Our Books!</Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar