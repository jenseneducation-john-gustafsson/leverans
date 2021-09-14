//import Image from '../components/Category-page/Category-overview/CategoryImage'
//import '../components/Category-page/Category-overview/Category-overview.css'

/*css*/
import "../Category-details/Category-details.css";
//Horror Imports
import TheShining from "../Category-details/Images/The Shining (1980).jpg";
import Alien from "../Category-details/Images/Alien (1979).jpg";
import Psycho from "../Category-details/Images/Psycho (1960).jpg";
import Tumbbad from "../Category-details/Images/Tumbbad (2018).jpg";
//Horror -- del
import TheShining from "../Category-details/Images/The Shining (1980).jpg";
import Alien from "../Category-details/Images/Alien (1979).jpg";
import Psycho from "../Category-details/Images/Psycho (1960).jpg";
import Tumbbad from "../Category-details/Images/Tumbbad (2018).jpg";
//Comedy -- del
import Parasite from "../Category-details/Images/Parasite (2019).jpg";
import LifeIsBeautiful from "../Category-details/Images/Life Is Beautiful (1997).jpg";
import TheIntouchables from "../Category-details/Images/The Intouchables (2011).jpg";
import BackToTheFuture from "../Category-details/Images/Back to the Future (1985).jpg";

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
              <img src={TheDarkKnight} alt="TheDarkKnight" width="196px" height="300px" />
             
              <h4>The Dark Knight</h4>
              <p>
                2008 | 1h 48m
              </p>
              <button>Buy</button>
            </div>
          </div>
  
          <div class="column">
            <div class="content">
              <img
                src={LOTRReturnOfKing}
                alt="LOTRReturnOfKing"
                width="196px"
                height="300px"
              />
              <h4>LOTR - Return of the King </h4>
              <p>
                2003 | Run Time
              </p>
              <button>Buy</button>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src={Inception} alt="Inception" width="196px" height="300px" />
              <h4>Inception</h4>
              <p>
                2010 | Run Time
              </p>
              <button>Buy</button>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src={TheMatrix} alt="TheMatrix" width="196px" height="300px" />
              <h4>The Matrix</h4>
              <p>
                1999 | 1h 58m
              </p>
              <button>Buy</button>
            </div>
          </div>
  
          <h3>Horror</h3> 
  
          <div class="row2">
            <div class="column">
              <div class="content">
                <img src={TheShining} alt="TheShining" width="196px" height="300px" />
                <h4>The Shining</h4>
                <p>
                   1980 | Run Time
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Alien} alt="Alien" width="196px" height="300px" />
                <h4>Alien</h4>
                <p>
                  1979 | RunTime
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={Psycho}
                  alt="Psycho"
                  width="196px"
                  height="300px"
                />
                <h4>Psycho</h4>
                <p>
                  1960 | RunTIme
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Tumbbad} alt="Tumbbad" width="196px" height="300px" />
                <h4>Tumbbad</h4>
                <p>
                  2018 | RunTime
                </p>
                <button>Buy</button>
              </div>
            </div>
  
            <h3>Comedy</h3>
  
            <div class="row2">
              <div class="column">
                <div class="content">
                  <img
                    src={Parasite}
                    alt="Parasite"
                    width="196px"
                    height="300px"
                  />
                  <h4>Parasite</h4>
                  <p>
                    Date RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div class="column">
                <div class="content">
                  <img
                    src={LifeIsBeautiful}
                    alt="LifeIsBeautiful"
                    width="196px"
                    height="300px"
                  />
                  <h4>Life Is Beautiful</h4>
                  <p>
                    Date RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div class="column">
                <div class="content">
                  <img src={TheIntouchables} alt="TheIntouchables" width="196px" height="300px" />
                  <h4>The Intouchables</h4>
                  <p>
                    Date RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div class="column">
                <div class="content">
                  <img src={BackToTheFuture} alt="BackToTheFuture" width="196px" height="300px" />
                  <h4>Back To The Future</h4>
                  <p>
                    Date - RunTime
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