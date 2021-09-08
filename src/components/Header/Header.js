import "./Header.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { FaSignInAlt } from "react-icons/fa"

function Header() {
  return (
    <div >
      <nav className="nav-header">
        <h2 className="nav-header-title">Notflix</h2>
        <div className="nav-header-icons">
          <button className="nav-header-buttons">
            <FaSignInAlt />
          </button>
          <button className="nav-header-buttons">
            <RiAccountCircleFill />
          </button>
          <button className="nav-header-buttons">
            <TiShoppingCart />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header;