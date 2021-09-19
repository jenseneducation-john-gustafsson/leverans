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
//Drama
import WW2 from "./Pictures/WW2.jpg";
import TheGodfather from "./Pictures/TheGodfather.jpg";
import Rocky from "./Pictures/Rocky.jpg";
import Best from "./Pictures/5Best.jpg";
//Animation
import Shrek from "./Pictures/Shrek.jpg";
import KungFuPanda from "./Pictures/KungFuPanda.jpg";
import Minions from "./Pictures/Minions.jpg";
import Madagascar from "./Pictures/Madagascar.jpg";

export default function Bundles(props){
const {onAdd} = props;
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
              Save 164.00 kr when you buy this bundle rather than each movie
              individually.
            </p>
            
            <hr></hr>
            
            <p>
                  $199
                </p>
            <button className="Bundlebutton" onClick ={onAdd}>Buy</button>
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
              Save 264.00 kr when you buy this bundle rather than each movie
              individually.
            </p>
            <hr></hr>
            <p>
                  $499
                </p>
            <button className="Bundlebutton">Buy</button>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <img src={ThePurge} alt="ThePurge" width="196px" height="300px" />
            <h4>The Purge Collection</h4>
            <p>
              Save 67.00 kr when you buy this bundle rather than each movie
              individually.
            </p>
            <hr></hr>
            <p>
                  $249
                </p>
            <button className="Bundlebutton">Buy</button>
          </div>
        </div>
        <div class="column">
          <div class="content">
            <img src={TheRing} alt="TheRing" width="196px" height="300px" />
            <h4>The Rings 3-Movie Collection</h4>
            <p>
              Save 78.00 kr when you buy this bundle rather than each movie
              individually.
            </p>
            <hr></hr>
            <p>
                  $199
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
                Save 194.00 kr when you buy this bundle rather than each movie
                individually.
              </p>
              <hr></hr>
              <p>
                  $499
                </p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src={BadBoys} alt="BadBoys" width="196px" height="300px" />
              <h4>Bad Boys 3-Movie Collection</h4>
              <p>
                Save 88.00 kr when you buy this bundle rather than each movie
                individually.
              </p>
              <hr></hr>
              <p>
                  $99
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
                Save 98.00 kr when you buy this bundle rather than each movie
                individually.
              </p>
              <hr></hr>
              <p>
                  $299
                </p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>
          <div class="column">
            <div class="content">
              <img src={XMen} alt="XMen" width="196px" height="300px" />
              <h4>X-Men Trilogy: Extended Bundle</h4>
              <p>
                Save 48.00 kr when you buy this bundle rather than each movie
                individually.
              </p>
              <hr></hr>
              <p>
                  $149
                </p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>

          <h3>Drama</h3>

          <div class="row2">
            <div class="column">
              <div class="content">
                <img src={WW2} alt="WW2" width="196px" height="300px" />
                <h4>WWII Films 5 Movies</h4>
                <p>
                  Save 146.00 kr when you buy this bundle rather than each movie
                  individually.
                </p>
                <hr></hr>
                <p>
                  $259
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
                  Save 38.00 kr when you buy this bundle rather than each movie
                  individually.
                </p>
                <hr></hr>
                <p>
                  $149
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Rocky} alt="Rocky" width="196px" height="300px" />
                <h4>Rocky Heavyweight </h4>
                <p>
                  Save 245.00 kr when you buy this bundle rather than each movie
                  individually.
                </p>
                <hr></hr>
                <p>
                  $399
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Best} alt="5Best" width="196px" height="300px" />
                <h4>Best Picture 5-Film Collection</h4>
                <p>
                  Save 126.00 kr when you buy this bundle rather than each movie
                  individually.
                </p>
                <hr></hr>
                <p>
                  $139
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
                  Save 67.00 kr when you buy this bundle rather than each movie
                  individually.
                </p>
                <hr></hr>
                <p>
                  $369
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
                  Save 58.00 kr when you buy this bundle rather than each movie
                  individually.
                </p>
                <hr></hr>
                <p>
                  $199
                </p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div class="column">
              <div class="content">
                <img src={Minions} alt="Minions" width="196px" height="300px" />
                <h4>Despicable Me 1-3: Minions</h4>
                <p>
                  Save 67.00 kr when you buy this bundle rather than each movie
                  individually.
                </p>
                <hr></hr>
                <p>
                  $259
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
                  Save 67.00 kr when you buy this bundle rather than each movie
                  individually.
                </p>
                <hr></hr>
                <p>
                  $199
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

