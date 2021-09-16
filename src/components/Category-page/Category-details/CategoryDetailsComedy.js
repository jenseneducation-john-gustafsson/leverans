//import Image from '../components/Category-page/Category-overview/CategoryImage'
//import '../components/Category-page/Category-overview/Category-overview.css'

/*css*/
import "../Category-details/Category-details.css";
//Comedy Thumbnail Imports
import Parasite from "../Category-details/ImagesComedy/Parasite (2019).jpg";
import LifeIsBeautiful from "../Category-details/ImagesComedy/Life Is Beautiful (1997).jpg";
import TheIntouchables from "../Category-details/ImagesComedy/The Intouchables (2011).jpg";
import BackToTheFuture from "../Category-details/ImagesComedy/Back to the Future (1985).jpg";
//-----------------------------------------------------------------------
 import Snatch from "../Category-details/ImagesComedy/Snatch (2000).jpg";
 import IntoTheSpiderverse from "../Category-details/ImagesComedy/Spider-Man_ Into the Spider-Verse (2018).jpg";
 import WildTales from "../Category-details/ImagesComedy/Wild Tales (2014).jpg";
 import GreenBook from "../Category-details/ImagesComedy/Green Book (2018).jpg";
//-----------------------------------------------------------------------
 import TrumanShow from "../Category-details/ImagesComedy/Truman Show (1998).jpg";
 import TheBigLebowski from "../Category-details/ImagesComedy/The Big Lebowski (1998).png";
 import TheHangover2 from "../Category-details/ImagesComedy/The Hangover 2 (2011).jpg";
 import YourHighness from "../Category-details/ImagesComedy/Your Highness (2011).jpg";

 import { Link } from "react-router-dom";

function CategoryDetailsComedy() {
    return (
      <div className="main-fluid">
        
        
  
        <h2>Comedy</h2> <Link to="/genre"><button className="Catbutton"><p classNameName="nav-text">Return to Categories</p></button></Link>
  
        <div className="row2">
          <div className="column">
            <div className="content">
            
              <img src={Parasite} alt="Parasite" width="196px" height="300px" />
             
              <h4>Parasite</h4>
              <p>
                2019 | 1h 48m
              </p>
              <button className="Catbutton">Buy</button>
            </div>
          </div>
  
          <div className="column">
            <div className="content">
              <img
                src={LifeIsBeautiful}
                alt="LifeIsBeautiful"
                width="196px"
                height="300px"
              />
              <h4>Life Is Beautiful</h4>
              <p>
                1997 | Run Time
              </p>
              <button className="Catbutton">Buy</button>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src={TheIntouchables} alt="The Intouchables" width="196px" height="300px" />
              <h4>The Intouchables</h4>
              <p>
                2011 | Run Time
              </p>
              <button className="Catbutton">Buy</button>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src={BackToTheFuture} alt="BackToTheFuture" width="196px" height="300px" />
              <h4>Back To The Future</h4>
              <p>
                1985 | 1h 58m
              </p>
              <button className="Catbutton">Buy</button>
            </div>
          </div>
  
          <hr></hr>
  
          <div className="row2">
            <div className="column">
              <div className="content">
                <img src={Snatch} alt="Snatch" width="196px" height="300px" />
                <h4>Snatch</h4>
                <p>
                   2000 | Run Time
                </p>
                <button className="Catbutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={IntoTheSpiderverse} alt="IntoTheSpiderverse" width="196px" height="300px" />
                <h4>Into The Spiderverse</h4>
                <p>
                  2018 | RunTime
                </p>
                <button className="Catbutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img
                  src={WildTales}
                  alt="Wild Tales"
                  width="196px"
                  height="300px"
                />
                <h4>Wild Tales</h4>
                <p>
                  2014 | RunTIme
                </p>
                <button className="Catbutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={GreenBook} alt="GreenBook" width="196px" height="300px" />
                <h4>Green Book</h4>
                <p>
                  2018 | RunTime
                </p>
                <button className="Catbutton">Buy</button>
              </div>
            </div>
  
            <hr></hr>
  
            <div className="row2">
              <div className="column">
                <div className="content">
                  <img
                    src={TrumanShow}
                    alt="Truman Show"
                    width="196px"
                    height="300px"
                  />
                  <h4>Truman Show</h4>
                  <p>
                    1998 | RunTime
                  </p>
                  <button className="Catbutton">Buy</button>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <img
                    src={TheBigLebowski}
                    alt="The Big Lebowski"
                    width="196px"
                    height="300px"
                  />
                  <h4>The Big Lebowski</h4>
                  <p>
                    1998 | RunTime
                  </p>
                  <button className="Catbutton">Buy</button>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <img src={TheHangover2} alt="The Hangover 2" width="196px" height="300px" />
                  <h4>The Hangover 2</h4>
                  <p>
                    2011 | RunTime
                  </p>
                  <button className="Catbutton">Buy</button>
                </div>
              </div>
              <div className="column">
                <div className="content">
                  <img src={YourHighness} alt="Your Highness" width="196px" height="300px" />
                  <h4>Your Highness</h4>
                  <p>
                    2011 | RunTime
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
  
  export default CategoryDetailsComedy;