//import Image from '../components/Category-page/Category-overview/CategoryImage'
//import '../components/Category-page/Category-overview/Category-overview.css'

/*css*/
import "../Category-details/Category-details.css";
//Action Thumbnail Imports
import TheDarkKnight from "../Category-details/ImagesAction/The Dark Knight (2008).jpg";
import LOTRReturnOfKing from "../Category-details/ImagesAction/The Lord of the Rings_ The Return of the King (2003).jpg";
import Inception from "../Category-details/ImagesAction/Inception (2010).jpg";
import TheMatrix from "../Category-details/ImagesAction/The Matrix (1999).jpg";
//-----------------------------------------------------------------------
import SWEmpireStrikesBack from "../Category-details/ImagesAction/Star Wars - Empire Strikes Back (1980).jpg";
import Gladiator from "../Category-details/ImagesAction/Gladiator (2000).jpg";
import Leon from "../Category-details/ImagesAction/Léon (1994).jpg";
import Terminator2 from "../Category-details/ImagesAction/Terminator 2 - Judgement Day (1991).jpg";
//-----------------------------------------------------------------------
import DieHard from "../Category-details/ImagesAction/Die Hard (1988).jpg";
import Logan from "../Category-details/ImagesAction/Logan - The Wolverine (2017).jpg";
import VForVendetta from "../Category-details/ImagesAction/V for Vendetta (2005).jpg";
import KillBillVol1 from "../Category-details/ImagesAction/Kill Bill_ Vol. 1 (2003).jpg";

import { Link } from "react-router-dom";

function CategoryDetailsAction() {
    return (
      <div className="main">
        
        
  
        <h2>Action</h2> <Link to="/genre"><button><p className="nav-text">Return to Categories</p></button></Link>
  
        <div className="row2">
          <div className="column">
            <div className="content">
            
              <img src={TheDarkKnight} alt="TheDarkKnight" width="196px" height="300px" />
             
              <h4>The Dark Knight</h4>
              <p>
                2008 | 1h 48m
              </p>
              <button>Buy</button>
            </div>
          </div>
  
          <div className="column">
            <div className="content">
              <img
                src={LOTRReturnOfKing}
                alt="LOTRReturnOfKing"
                width="196px"
                height="300px"
              />
              <h4>LOTR - Return of the King </h4>
              <p>
                2003 | 3h 21m
              </p>
              <button>Buy</button>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src={Inception} alt="Inception" width="196px" height="300px" />
              <h4>Inception</h4>
              <p>
                2010 | 2h 28m
              </p>
              <button>Buy</button>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src={TheMatrix} alt="TheMatrix" width="196px" height="300px" />
              <h4>The Matrix</h4>
              <p>
                1999 | 1h 58m
              </p>
              <button>Buy</button>
            </div>
          </div>
  
          <hr></hr>
  
          <div className="row2">
            <div className="column">
              <div className="content">
                <img src={SWEmpireStrikesBack} alt="SWEmpireStrikesBack" width="196px" height="300px" />
                <h4>SW - Empire Strikes Back</h4>
                <p>
                   1980 | Run Time
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={Gladiator} alt="Gladiator" width="196px" height="300px" />
                <h4>Gladiator</h4>
                <p>
                  2000 | RunTime
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img
                  src={Leon}
                  alt="Leon"
                  width="196px"
                  height="300px"
                />
                <h4>Léon</h4>
                <p>
                  1994 | RunTIme
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={Terminator2} alt="Terminator 2" width="196px" height="300px" />
                <h4>Terminator 2 </h4>
                <p>
                  1991 | RunTime
                </p>
                <button>Buy</button>
              </div>
            </div>
  
            <hr></hr>
  
            <div className="row2">
              <div className="column">
                <div className="content">
                  <img
                    src={DieHard}
                    alt="Die Hard"
                    width="196px"
                    height="300px"
                  />
                  <h4>Die Hard</h4>
                  <p>
                    1988 | RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <img
                    src={Logan}
                    alt="Logan"
                    width="196px"
                    height="300px"
                  />
                  <h4>Logan - The Wolverine</h4>
                  <p>
                    2017 | RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <img src={VForVendetta} alt="V For Vendetta" width="196px" height="300px" />
                  <h4>V For Vendetta</h4>
                  <p>
                    2005 | RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <img src={KillBillVol1} alt="Kill Bill Vol. 1" width="196px" height="300px" />
                  <h4>Kill Bill Vol. 1</h4>
                  <p>
                    2003 | RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
            </div>
           
  
           
          </div>
        </div>
      </div>
    );
  }
  
  export default CategoryDetailsAction;