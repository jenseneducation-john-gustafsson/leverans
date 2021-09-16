import "./Header.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { FaSignInAlt } from "react-icons/fa"

import { Link } from "react-router-dom";

function Header() {
  return (
    <div >
      <nav className="nav-header">
        <h2 className="nav-header-title">
          <Link to="/">Notflix</Link>
          </h2>
        <div className="nav-header-icons">
          <Link to="/login">
            <button className="nav-header-buttons">
              <FaSignInAlt />
            </button>
          </Link>
          <Link to="/register">
            <button className="nav-header-buttons">
              <RiAccountCircleFill />
            </button>
          </Link>
          <button className="nav-header-buttons">
            <TiShoppingCart />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header;