import "./Header.css";
import { FaSignInAlt } from "react-icons/fa"
import CartButton from '../Cart/CartButton';
import { FaSignOutAlt } from "react-icons/fa";


import { Link } from "react-router-dom";


//Buy button reducer import
import { useSelector, useDispatch } from "react-redux";
import { isAuthenticated, authUsername } from "../../store/authenticatedSlice";


function Header() {

  const isLoggedIn = useSelector(state => state.authenticated.loggedIn)

  const dispatch = useDispatch();

  const logOut = () => {

    dispatch(isAuthenticated(false))

    dispatch(authUsername(""));


  }

  return (
    <div >
      <nav className="nav-header">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h2 className="nav-header-title">Notflix</h2>
        </Link>

        <div className="nav-header-icons">

          {!isLoggedIn ? <Link to="/login">
            <button className="nav-header-buttons">
              <FaSignInAlt />
            </button>
          </Link> : <Link to="/">
            <button className="nav-header-buttons" onClick={logOut}>
              <FaSignOutAlt />
            </button>
          </Link>}



          <Link to="/cart">
            <button className="nav-header-buttons">
              <CartButton />
            </button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Header;