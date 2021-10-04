/*css*/
import "../components/Category-page/Category-overview/CategoryOverview.css";

import { Link } from "react-router-dom";
import GetCategoryOverView from '../components/Category-page/Category-overview/GetCategoryOverView';

function CategoryOverview() {
  
  return ( 
    <div className="container-fluid">
      <h2>Categories</h2>
      <p>
        Browse and select different categories that you may like to watch.
      </p>
      <hr></hr>
      <p>Click on a Image to read a synopsis.</p>
      <h3>Action</h3>  <Link to="/categoryAction"><button className="Catbutton"><p className="nav-text">Browse Full List</p></button></Link>
      <div className="row2">
        <GetCategoryOverView start={0} end={4} />
      </div>

      <h3>Horror</h3> <Link to="/categoryHorror"><button className="Catbutton"><p className="nav-text">Browse Full List</p></button></Link>
      <div className="row2">
        <GetCategoryOverView start={23} end={27} />
      </div>

      <h3>Comedy</h3> <Link to="/categoryComedy"><button className="Catbutton"><p className="nav-text">Browse Full List</p></button></Link>
      <div className="row2">
        <GetCategoryOverView start={12} end={16} />
      </div>
    </div>
  );
}

export default CategoryOverview;