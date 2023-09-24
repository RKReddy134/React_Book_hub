/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="container-1">
    <img
      src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      alt="logo"
      className="logo"
    />
    <ul className="component-container">
      <li>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
