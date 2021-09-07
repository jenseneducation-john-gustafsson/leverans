import "./Header.css";
import { RiAccountCircleFill } from "react-icons/ri";

function Header() {
  return (
    <div >
      <nav className="nav">
        <h2 className="nav-header">Notflix</h2>
        <div className="nav-icons">
          <button className="nav-buttons">
            <RiAccountCircleFill />
          </button>
          <button className="nav-buttons">
            <RiAccountCircleFill />
          </button>
          <button className="nav-buttons">
            <RiAccountCircleFill />
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Header;