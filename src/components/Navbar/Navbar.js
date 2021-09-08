import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <button className="navbar-buttons"><p className="nav-text">Top Rated</p></button>
        <button className="navbar-buttons"><p className="nav-text">Latest</p></button>
        <button className="navbar-buttons"><p className="nav-text">Bundles</p></button>
        <button className="navbar-buttons"><p className="nav-text">Genre</p></button>
      </div>
    </div>
  )
}
export default Navbar