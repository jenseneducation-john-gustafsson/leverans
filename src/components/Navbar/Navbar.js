import "./Navbar.css";

import { Link } from "react-router-dom";

function Navbar() {

  return (
      <div>
        <nav>
          <div className="navbar">
            <Link to="/"><button className="navbar-buttons"><p className="nav-text">Home</p></button></Link>
            <Link to="/bundles"><button className="navbar-buttons"><p className="nav-text">Bundles</p></button></Link>
            <Link to="/genre"><button className="navbar-buttons"><p className="nav-text">Genre</p></button></Link>
            <Link to="/wishlist"><button className="navbar-buttons"><p className="nav-text">Wishlist</p></button></Link>
          </div>
        </nav>
      </div>

  )
}
export default Navbar