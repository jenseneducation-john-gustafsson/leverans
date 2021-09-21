// Modal Head-Component
import ModalRoot from '.././modules/modals/components/ModalRoot';
import ModalService from '.././modules/modals/services/ModalService';
import Modal_0 from '../components/Modals/Modal_0'


/*css*/
import "../components/Category-page/Category-overview/CategoryOverview.css";
//Action
import TheDarkKnight from "../components/Category-page/Category-overview/Images/The Dark Knight (2008).jpg";
import LOTRReturnOfKing from "../components/Category-page/Category-overview/Images/The Lord of the Rings_ The Return of the King (2003).jpg";
import Inception from "../components/Category-page/Category-overview/Images/Inception (2010).jpg";
import TheMatrix from "../components/Category-page/Category-overview/Images/The Matrix (1999).jpg";
//Horror
import TheShining from "../components/Category-page/Category-overview/Images/The Shining (1980).jpg";
import Alien from "../components/Category-page/Category-overview/Images/Alien (1979).jpg";
import Psycho from "../components/Category-page/Category-overview/Images/Psycho (1960).jpg";
import Tumbbad from "../components/Category-page/Category-overview/Images/Tumbbad (2018).jpg";
//Comedy
import Parasite from "../components/Category-page/Category-overview/Images/Parasite (2019).jpg";
import LifeIsBeautiful from "../components/Category-page/Category-overview/Images/Life Is Beautiful (1997).jpg";
import TheIntouchables from "../components/Category-page/Category-overview/Images/The Intouchables (2011).jpg";
import BackToTheFuture from "../components/Category-page/Category-overview/Images/Back to the Future (1985).jpg";

import { Link } from "react-router-dom";

// Specific Modals
import Modal_1 from '../components/Modals/Modal_1';
import Modal_2 from '../components/Modals/Modal_2';
import Modal_3 from '../components/Modals/Modal_3';

// Import Modal här - /(Rendera här? eller separat folder. TITTA PÅ SENARE)



function App() {
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

    return ( // Replaced main with main-fluid, dvs container = container-fluid. // Full-width.
      <div className="main-fluid"> 
        <ModalRoot />
        <h2>Categories</h2>
        <p>
          Browse and select different categories that you may like to watch.
        </p>
        <hr></hr>
        <p>Click on a Image to read a synopsis.</p>
  
        <h3>Action</h3>  <Link to="/categoryAction"><button className="Catbutton"><p className="nav-text">Browse Full List</p></button></Link>
        
        <div className="row2">
          <div className="column">
            <div className="content">
            
              <img className="fade-in-image" src={TheDarkKnight} alt="TheDarkKnight" width="196px" height="300px" onClick={addModal} />
             
              <h4>The Dark Knight</h4>
              <p>
                2008 | 1h 48m
              </p>
              <button className="Catbutton">Buy</button>
            </div>
          </div>
          
          <div className="column">
            <div className="content">
              <img className="fade-in-image"
                src={LOTRReturnOfKing}
                alt="LOTRReturnOfKing"
                width="196px"
                height="300px"
                class="img-fluid rounded-start"
                onClick={addModal_1}
              />
              <h4>LOTR - Return of the King </h4>
              <p>
                2003 | Run Time
              </p>
              <button className="Catbutton">Buy</button>
              <button className="Catbutton" onClick={addModal_1}>Details</button>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img className="fade-in-image" src={Inception} alt="Inception" width="196px" height="300px" onClick={addModal_2} />
              <h4>Inception</h4>
              <p>
                2010 | Run Time
              </p>
              <button className="Catbutton">Buy</button>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img className="fade-in-image" src={TheMatrix} alt="TheMatrix" width="196px" height="300px" onClick={addModal_3} />
              <h4>The Matrix</h4>
              <p>
                1999 | 1h 58m
              </p>
              <button className="Catbutton">Buy</button>
            </div>
          </div>
  
          <h3>Horror</h3> <Link to="/categoryHorror"><button className="Catbutton"><p className="nav-text">Browse Full List</p></button></Link>
  
          <div className="row2">
            <div className="column">
              <div className="content">
                <img className="fade-in-image" src={TheShining} alt="TheShining" width="196px" height="300px" />
                <h4>The Shining</h4>
                <p>
                   1980 | Run Time
                </p>
                <button className="Catbutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img className="fade-in-image" src={Alien} alt="Alien" width="196px" height="300px" />
                <h4>Alien</h4>
                <p>
                  1979 | RunTime
                </p>
                <button className="Catbutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img className="fade-in-image"
                  src={Psycho}
                  alt="Psycho"
                  width="196px"
                  height="300px"
                />
                <h4>Psycho</h4>
                <p>
                  1960 | RunTIme
                </p>
                <button className="Catbutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img className="fade-in-image" src={Tumbbad} alt="Tumbbad" width="196px" height="300px" />
                <h4>Tumbbad</h4>
                <p>
                  2018 | RunTime
                </p>
                <button className="Catbutton">Buy</button>
              </div>
            </div>
  
            <div>
             <h3>Comedy</h3> <Link to="/categoryComedy"><button className="Catbutton"><p className="nav-text">Browse Full List</p></button></Link>
              </div>
  
            <div className="row2">
              <div className="column">
                <div className="content">
                  <img className="fade-in-image"
                    src={Parasite}
                    alt="Parasite"
                    width="196px"
                    height="300px"
                  />
                  <h4>Parasite</h4>
                  <p>
                    Date RunTime
                  </p>
                  <button className="Catbutton">Buy</button>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <img className="fade-in-image"
                    src={LifeIsBeautiful}
                    alt="LifeIsBeautiful"
                    width="196px"
                    height="300px"
                  />
                  <h4>Life Is Beautiful</h4>
                  <p>
                    Date RunTime
                  </p>
                  <button className="Catbutton">Buy</button>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <img className="fade-in-image" src={TheIntouchables} alt="TheIntouchables" width="196px" height="300px" />
                  <h4>The Intouchables</h4>
                  <p>
                    Date RunTime
                  </p>
                  <button className="Catbutton">Buy</button>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <img className="fade-in-image" src={BackToTheFuture} alt="BackToTheFuture" width="196px" height="300px" />
                  <h4>Back To The Future</h4>
                  <p>
                    Date - RunTime
                  </p>
                  <button className="Catbutton">Buy</button>
                </div>
              </div>
            </div>
           
  
           
          </div>
        </div>
      </div>
    );
  }
  
  export default App;