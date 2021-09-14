import "./Navbar.css";

import Wishlist from "../../view/Wishlist";
import Bundle from "../Bundle/Bundle";
import Genre from "../../view/CategoryOverview"
import StartPage from "../../view/StartPage"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Navbar() {

  return (
    <Router>
      <div>
        <nav>
          <div className="navbar">
             {/* <Link to=""><button className="navbar-buttons"><p className="nav-text">Top Rated</p></button></Link> */}
            <Link to="/"><button className="navbar-buttons"><p className="nav-text">Home</p></button></Link>
            <Link to="/bundles"><button className="navbar-buttons"><p className="nav-text">Bundles</p></button></Link>
            <Link to="/genre"><button className="navbar-buttons"><p className="nav-text">Genre</p></button></Link>
            <Link to="/wishlist"><button className="navbar-buttons"><p className="nav-text">Wishlist</p></button></Link>
          </div>
        </nav>

    <Route path="/" exact>
      <StartPage />
    </Route>
    <Route path="/bundles">
      <Bundle />
    </Route>
    <Route path="/genre">
      <Genre />
    </Route>
    <Route path="/wishlist">
      <Wishlist />
    </Route>

      </div>
    </Router>
  )
}
export default Navbar