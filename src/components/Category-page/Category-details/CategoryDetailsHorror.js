//import Image from '../components/Category-page/Category-overview/CategoryImage'
//import '../components/Category-page/Category-overview/Category-overview.css'

/*css*/
import "../Category-details/Category-details.css";
//Horror Thumbnails Imports
import TheShining from "../Category-details/ImagesHorror/The Shining (1980).jpg";
import Alien from "../Category-details/ImagesHorror/Alien (1979).jpg";
import Psycho from "../Category-details/ImagesHorror/Psycho (1960).jpg";
import Tumbbad from "../Category-details/ImagesHorror/Tumbbad (2018).jpg";
//Horror -- del
import TheThing from "../Category-details/ImagesHorror/The Thing (1982).jpg";
import TheExorcist from "../Category-details/ImagesHorror/The Exorcist (1973).jpg";
import GetOut from "../Category-details/ImagesHorror/Get Out (2017).jpg";
import Halloween from "../Category-details/ImagesHorror/Halloween (1978).jpg";
//Comedy -- del
import HollowMan from "../Category-details/ImagesHorror/Hollow Man (2000).jpg";
import Saw from "../Category-details/ImagesHorror/Saw (2004).jpg";
import TheLighthouse from "../Category-details/ImagesHorror/The Lighthouse (2019).jpg";
import TheConjuring from "../Category-details/ImagesHorror/The Conjuring (2013).jpg";

function CategoryDetailsHorror() {
    return (
      <div class="main">
        
        <h2>Categories</h2>
        <p>
          Browse and select different categories that you may like to watch.
        </p>
  
        <h3>Horror</h3>
  
        <div class="row2">
          <div class="column">
            <div class="content">
            <div class="overlay">
                <div class="text">
                  Save 194.00 kr when you buy this bundle rather than each movie
                  individually.
                </div>
              </div>
              <img src={TheShining} alt="The Shining" width="196px" height="300px" />
             
              <h4>The Shining</h4>
              <p>
                1980 | 1h 48m
              </p>
              <button>Buy</button>
            </div>
          </div>
  
          <div class="column">
            <div class="content">
              <img
                src={Alien}
                alt="Alien"
                width="196px"
                height="300px"
              />
              <h4>Alien </h4>
              <p>
                1979 | Run Time
              </p>
              <button>Buy</button>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src={Psycho} alt="Psycho" width="196px" height="300px" />
              <h4>Psycho</h4>
              <p>
                1960 | Run Time
              </p>
              <button>Buy</button>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src={Tumbbad} alt="Tumbbad" width="196px" height="300px" />
              <h4>Tumbbad</h4>
              <p>
                2018 | 1h 58m
              </p>
              <button>Buy</button>
            </div>
          </div>
  
          <h3>Horror</h3> 
  
          <div class="row2">
            <div class="column">
              <div class="content">
                <img src={TheThing} alt="The Thing" width="196px" height="300px" />
                <h4>The Thing</h4>
                <p>
                   1982 | Run Time
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={TheExorcist} alt="The Exorcist" width="196px" height="300px" />
                <h4>The Exorcist</h4>
                <p>
                  1973 | RunTime
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={GetOut}
                  alt="Get Out"
                  width="196px"
                  height="300px"
                />
                <h4>Get Out</h4>
                <p>
                  2017 | RunTime
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Halloween} alt="Halloween" width="196px" height="300px" />
                <h4>Halloween</h4>
                <p>
                  1978 | RunTime
                </p>
                <button>Buy</button>
              </div>
            </div>
  
            <h3>Comedy</h3>
  
            <div class="row2">
              <div class="column">
                <div class="content">
                  <img
                    src={HollowMan}
                    alt="Hollow Man"
                    width="196px"
                    height="300px"
                  />
                  <h4>Hollow Man</h4>
                  <p>
                    2000 | RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div class="column">
                <div class="content">
                  <img
                    src={Saw}
                    alt="Saw"
                    width="196px"
                    height="300px"
                  />
                  <h4>Saw</h4>
                  <p>
                    2004 | RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div class="column">
                <div class="content">
                  <img src={TheLighthouse} alt="The Lighthouse" width="196px" height="300px" />
                  <h4>The Lighthouse</h4>
                  <p>
                    2019 | RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div class="column">
                <div class="content">
                  <img src={TheConjuring} alt="The Conjuring" width="196px" height="300px" />
                  <h4>The Conjuring</h4>
                  <p>
                    2013 | RunTime
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
  
  export default CategoryDetailsHorror;