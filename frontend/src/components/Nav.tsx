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
          <Link to="heyoo">Find Talent</Link>
        </li>
        <li>Post Listing</li>
        <li>For Devs</li>
      </ul>
      <span className="navButtons">
        <button className="b1">Request Demo</button>
        <Link to="/login">
          <button className="b2">Login</button>
        </Link>
      </span>
    </div>
  )
}

export default Nav