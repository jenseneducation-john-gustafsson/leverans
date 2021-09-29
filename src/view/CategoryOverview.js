// Modal Head-Component
import ModalRoot from '.././modules/modals/components/ModalRoot';
import ModalService from '.././modules/modals/services/ModalService';

/*css*/
import "../components/Category-page/Category-overview/CategoryOverview.css";

import { Link } from "react-router-dom";
import GetCategoryOverView from '../components/Category-page/Category-overview/GetCategoryOverView';

// Specific Modals
import Modal_0 from '../components/Modals/Modal_0';
import Modal_1 from '../components/Modals/Modal_1';
import Modal_2 from '../components/Modals/Modal_2';
import Modal_3 from '../components/Modals/Modal_3';
import Modal_4 from '../components/Modals/Modal_4';
import Modal_5 from '../components/Modals/Modal_5';
import Modal_6 from '../components/Modals/Modal_6';
import Modal_7 from '../components/Modals/Modal_7';
import Modal_8 from '../components/Modals/Modal_8';
import Modal_9 from '../components/Modals/Modal_9';
import Modal_10 from '../components/Modals/Modal_10';
import Modal_11 from '../components/Modals/Modal_11';

// Import Modal här - /(Rendera här? eller separat folder. TITTA PÅ SENARE)

function CategoryOverview() {
  const addModal = () => {
    ModalService.open(Modal_0);
  };

  const addModal_1 = () => {
    ModalService.open(Modal_1);
  };

  const addModal_2 = () => {
    ModalService.open(Modal_2);
  };

  const addModal_3 = () => {
    ModalService.open(Modal_3);
  };

  const addModal_4 = () => {
    ModalService.open(Modal_4);
  };

  const addModal_5 = () => {
    ModalService.open(Modal_5);
  };

  const addModal_6 = () => {
    ModalService.open(Modal_6);
  };

  const addModal_7 = () => {
    ModalService.open(Modal_7);
  };

  const addModal_8 = () => {
    ModalService.open(Modal_8);
  };

  const addModal_9 = () => {
    ModalService.open(Modal_9);
  };

  const addModal_10 = () => {
    ModalService.open(Modal_10);
  };

  const addModal_11 = () => {
    ModalService.open(Modal_11);
  };

  return ( // Replaced main with main-fluid, dvs container = container-fluid. // Full-width.
    <div className="container-fluid">
      <ModalRoot/>
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