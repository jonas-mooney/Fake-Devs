import { Link } from 'react-router-dom'
import '../Nav.scss'

const Nav = () => {


  return (
    <div className="navigation">
      <h1>Devo4</h1>
      <ul className="navItems">
        <li>
          <Link to="heyoo">Find Talent</Link>
        </li>
        <li>Post Listing</li>
        <li>For Devs</li>
        {/* <li>Resources</li> */}
      </ul>
      <span className="navButtons">
        <button className="b1">Request Demo</button>
        <button className="b2">Get Started</button>
      </span>
    </div>
  )
}

export default Nav