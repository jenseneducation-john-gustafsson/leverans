/*css*/
import "../Category-details/Category-details.css";
import Products from '../../../products.json';
import { Link } from "react-router-dom";

import GetMovieDetails from '../Category-details/GetMovieDetails'
function CategoryDetailsHorror() {
  return (
    <>
      <div className="container-fluid">
        <h2>Horror</h2> <Link to="/genre"><button className="Catbutton"><p className="nav-text">Return to Categories</p></button></Link>
        <div className="row2">
          {
            Products.map(({ film }) => {
              if (film.gener === "Horror") {
                return <GetMovieDetails key={film.id} id={film.id} />
              }
            })
          }
        </div>
      </div>
    </>
  );
}

export default CategoryDetailsHorror;