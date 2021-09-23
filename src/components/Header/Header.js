import "./Header.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { FaSignInAlt } from "react-icons/fa"
import CartButton from '../Cart/CartButton';


import { Link } from "react-router-dom";

function Header() {
  return (
    <div >
      <nav className="nav-header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2 className="nav-header-title">Notflix</h2>
        </Link>
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
          
          <Link to="/cart">
          <button className="nav-header-buttons">
              <TiShoppingCart />
              <CartButton/>
          </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header;