//import Image from '../components/Category-page/Category-overview/CategoryImage'
//import '../components/Category-page/Category-overview/Category-overview.css'

/*css*/
import "../Category-details/Category-details.css";
//Comedy Thumbnail Imports
import Parasite from "../Category-details/Images/Parasite (2019).jpg";
import LifeIsBeautiful from "../Category-details/ImagesAction/Life Is Beautiful (1997).jpg";
import TheIntouchables from "../Category-details/ImagesAction/The Intouchables (2011).jpg";
import BackToTheFuture from "../Category-details/ImagesAction/Back to the Future (1985).jpg";
//-----------------------------------------------------------------------
// import SWEmpireStrikesBack from "../Category-details/ImagesAction/Star Wars - Empire Strikes Back (1980).jpg";
// import Gladiator from "../Category-details/ImagesAction/Gladiator (2000).jpg";
// import Leon from "../Category-details/ImagesAction/Léon (1994).jpg";
// import Terminator2 from "../Category-details/ImagesAction/Terminator 2 - Judgement Day (1991).jpg";
// //-----------------------------------------------------------------------
// import DieHard from "../Category-details/ImagesAction/Die Hard (1988).jpg";
// import Logan from "../Category-details/ImagesAction/Logan - The Wolverine (2017).jpg";
// import VForVendetta from "../Category-details/ImagesAction/V for Vendetta (2005).jpg";
// import KillBillVol1 from "../Category-details/ImagesAction/Kill Bill_ Vol. 1 (2003).jpg";

function CategoryDetailsComedy() {
    return (
      <div class="main">
        
        
  
        <h2>Action</h2>
  
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
  
          <hr></hr>
  
          <div class="row2">
            <div class="column">
              <div class="content">
                <img src={SWEmpireStrikesBack} alt="SWEmpireStrikesBack" width="196px" height="300px" />
                <h4>SW - Empire Strikes Back</h4>
                <p>
                   1980 | Run Time
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Gladiator} alt="Gladiator" width="196px" height="300px" />
                <h4>Gladiator</h4>
                <p>
                  2000 | RunTime
                </p>
                <button>Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
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
            <div class="column">
              <div class="content">
                <img src={Terminator2} alt="Terminator 2" width="196px" height="300px" />
                <h4>Terminator 2 </h4>
                <p>
                  1991 | RunTime
                </p>
                <button>Buy</button>
              </div>
            </div>
  
            <hr></hr>
  
            <div class="row2">
              <div class="column">
                <div class="content">
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
              <div class="column">
                <div class="content">
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
              <div class="column">
                <div class="content">
                  <img src={VForVendetta} alt="V For Vendetta" width="196px" height="300px" />
                  <h4>V For Vendetta</h4>
                  <p>
                    2005 | RunTime
                  </p>
                  <button>Buy</button>
                </div>
              </div>
              <div class="column">
                <div class="content">
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
  
  export default CategoryDetailsComedy;