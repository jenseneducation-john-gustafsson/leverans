import "./Header.css";
import { RiAccountCircleFill } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { FaSignInAlt } from "react-icons/fa"

function Header() {
  return (
    <div >
      <nav className="nav">
        <h2 className="nav-header-title">Notflix</h2>
        <div className="nav-icons">
          <button className="nav-buttons">
            <FaSignInAlt />
          </button>
          <button className="nav-buttons">
            <RiAccountCircleFill />
          </button>
          <button className="nav-buttons">
            <TiShoppingCart />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header;