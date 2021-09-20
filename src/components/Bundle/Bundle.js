/*css*/
import "./bundle.css";
/*slide*/
// import Slider from "./Slider/Slider.js";
//import pic from '../src/components/Bundle/Pictures/joker.png'
//Horror
import Scream from "./Pictures/Scream.jpg";
import TheCounjuring from "./Pictures/TheConjuring.png";
import ThePurge from "./Pictures/ThePurge.jpg";
import TheRing from "./Pictures/TheRing.jpg";
//Action
import DC from "./Pictures/DC.jpg";
import BadBoys from "./Pictures/BadBoys.jpg";
import TheLordOfTheRings from "./Pictures/TheLordOfTheRings.jpg";
import XMen from "./Pictures/X-Men.jpg";
//Comedy
import ScaryMovie from "./Pictures/ScaryMovie.jpg";
import MeanGirls from "./Pictures/MeanGirls.jpg";
import HotShot from "./Pictures/HotShot.jpg";
import Big from "./Pictures/Big.jpg";
//Drama
import WW2 from "./Pictures/WW2.jpg";
import TheGodfather from "./Pictures/TheGodfather.jpg";
import Rocky from "./Pictures/Rocky.jpg";
import Best from "./Pictures/5Best.jpg";
//Adventure
import Jumanji from "./Pictures/Jumanji.jpg";
import MIB from "./Pictures/MIB.jpg";
import JurassicWorld from "./Pictures/JurassicWorld.jpg";
import TombRaider from "./Pictures/TombRaider.jpg";
//Sci-Fi
import StarTrek from "./Pictures/StarTrek.jpg";
import StarTrekTripple from "./Pictures/StarTrekTripple.jpg";
import Sci from "./Pictures/Sci-Films.jpg";
import Independence from "./Pictures/Independence.jpg";
//Animation
import Shrek from "./Pictures/Shrek.jpg";
import KungFuPanda from "./Pictures/KungFuPanda.jpg";
import Minions from "./Pictures/Minions.jpg";
import Madagascar from "./Pictures/Madagascar.jpg";

function App() {
  return (
    <div class="main-fluid">
      <h2>Bundle Of movies</h2>
      <h4>
        Get the best movie bundles deals so that you can enjoy the movie to the
        fullest!
      </h4>

      <h3>Horror</h3>

      <div class="row2">

      <div class="column">
          <div class="content">
            <img
              src={Scream}
              alt="Scream"
              width="196px"
              height="300px"
            />
            <h4>Conjuring Universe </h4>
            <p>
              Save 164.00 kr 
            </p>
            <button className="Bundlebutton">Buy</button>
          </div>
        </div>
       

        <div class="column">
          <div class="content">
            <img
              src={TheCounjuring}
              alt="TheCounjuring"
              width="196px"
              height="300px"
            />
            <h4>Conjuring Universe </h4>
            <p>
              Save 264.00 kr 
            </p>
            <button className="Bundlebutton">Buy</button>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <img src={ThePurge} alt="ThePurge" width="196px" height="300px" />
            <h4>The Purge Collection</h4>
            <p>
              Save 67.00 kr 
            </p>
            <button className="Bundlebutton">Buy</button>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <img src={TheRing} alt="TheRing" width="196px" height="300px" />
            <h4>The Rings 3-Movie Collection</h4>
            <p>
              Save 78.00 kr
            </p>
            <button className="Bundlebutton">Buy</button>
          </div>
        </div>

        <h3>Action</h3>

        <div class="row2">
          <div class="column">
            <div class="content">
              <img src={DC} alt="DC" width="196px" height="300px" />
              <h4>DC 7-Film Collection</h4>
              <p>
                Save 194.00 kr 
              </p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src={BadBoys} alt="BadBoys" width="196px" height="300px" />
              <h4>Bad Boys 3-Movie Collection</h4>
              <p>
                Save 88.00 kr 
              </p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img
                src={TheLordOfTheRings}
                alt="TheLordOfTheRings"
                width="196px"
                height="300px"
              />
              <h4>The Lord of the Rings Collection</h4>
              <p>
                Save 98.00 kr 
              </p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src={XMen} alt="XMen" width="196px" height="300px" />
              <h4>X-Men Trilogy: Extended Bundle</h4>
              <p>
                Save 48.00 kr 
              </p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>

          <h3>Comedy</h3>

          <div class="row2">
            <div class="column">
              <div class="content">
                <img
                  src={ScaryMovie}
                  alt="ScaryMovie"
                  width="196px"
                  height="300px"
                />
                <h4>Scary Movie Collection</h4>
                <p>
                  Save 88.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={MeanGirls}
                  alt="MeanGirls"
                  width="196px"
                  height="300px"
                />
                <h4>Mean Girls Collection</h4>
                <p>
                  Save 40.00 kr
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={HotShot} alt="HotShot" width="196px" height="300px" />
                <h4>Hot Shots Collection</h4>
                <p>
                  Save 19.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Big} alt="Big" width="196px" height="300px" />
                <h4>Night at the Museum</h4>
                <p>
                  Save 68.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
          </div>

          <h3>Drama</h3>

          <div class="row2">
            <div class="column">
              <div class="content">
                <img src={WW2} alt="WW2" width="196px" height="300px" />
                <h4>WWII Films 5 Movies</h4>
                <p>
                  Save 146.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={TheGodfather}
                  alt="TheGodfather"
                  width="196px"
                  height="300px"
                />
                <h4>The Godfather Trilogy</h4>
                <p>
                  Save 38.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Rocky} alt="Rocky" width="196px" height="300px" />
                <h4>Rocky Heavyweight </h4>
                <p>
                  Save 245.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Best} alt="5Best" width="196px" height="300px" />
                <h4>Best Picture 5-Film Collection</h4>
                <p>
                  Save 126.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
          </div>

          <h3>Adventure</h3>

          <div class="row2">
            <div class="column">
              <div class="content">
                <img src={Jumanji} alt="Jumanji" width="196px" height="300px" />
                <h4>Welcome to the Jumanji</h4>
                <p>
                  Save 9.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={MIB} alt="MIB" width="196px" height="300px" />
                <h4>Men in Black 4 Movie Collection</h4>
                <p>
                  Save 117.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={JurassicWorld}
                  alt="JurassicWorld"
                  width="196px"
                  height="300px"
                />
                <h4>Jurassic World Collection</h4>
                <p>
                  Save 96.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={TombRaider}
                  alt="TombRaider"
                  width="196px"
                  height="300px"
                />
                <h4>Tomb Raider Movie Collection</h4>
                <p>
                  Save 20.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
          </div>

          <h3>Sci-Fi</h3>

          <div class="row2">
            <div class="column">
              <div class="content">
                <img
                  src={StarTrek}
                  alt="StarTrek"
                  width="196px"
                  height="300px"
                />
                <h4>Star Trek The Original</h4>
                <p>
                  Save 155.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={StarTrekTripple}
                  alt="StarTrekTripple"
                  width="196px"
                  height="300px"
                />
                <h4>Star Trek 3 Film Collection</h4>
                <p>
                  Save 78.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Sci} alt="Sci" width="196px" height="300px" />
                <h4>Sci-Fi 5 Film Collection</h4>
                <p>
                  Save 86.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={Independence}
                  alt="Independence"
                  width="196px"
                  height="300px"
                />
                <h4>Independence Day: Collection</h4>
                <p>
                  Save 19.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
          </div>

          <h3>Animation</h3>

          <div class="row2">
            <div class="column">
              <div class="content">
                <img src={Shrek} alt="Shrek" width="196px" height="300px" />
                <h4>Shrek 4-Movie Collection</h4>
                <p>
                  Save 67.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={KungFuPanda}
                  alt="KungFuPanda"
                  width="196px"
                  height="300px"
                />
                <h4>Kung Fu Panda Movie Collection</h4>
                <p>
                  Save 58.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Minions} alt="Minions" width="196px" height="300px" />
                <h4>Despicable Me 1-3: Minions</h4>
                <p>
                  Save 67.00 kr
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img
                  src={Madagascar}
                  alt="Madagascar"
                  width="196px"
                  height="300px"
                />
                <h4>Madagascar 4-Movie Collection</h4>
                <p>
                  Save 67.00 kr 
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
