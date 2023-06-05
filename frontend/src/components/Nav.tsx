import { Link } from 'react-router-dom'
import '../Nav.scss'

const Nav = () => {


  return (
    <div className="navigation">
      <Link to="/" className="linkStyle">
        <h1>Devo4</h1>
      </Link>
      <ul className="navItems">
        <li>
          <Link to="/devs">Find Talent</Link>
        </li>
        <li>Post Listing</li>
        <li>For Devs</li>
      </ul>
      <span className="navButtons">
        <Link to="/signup">
        <button className="b1">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="b2">Login</button>
        </Link>
      </span>
    </div>
  )
}

export default Nav