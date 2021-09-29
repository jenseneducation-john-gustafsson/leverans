/*css*/
import "./bundle.css";

import ModalRoot from '../../modules/modals/components/ModalRoot';
import ModalService from '../../modules/modals/services/ModalService';
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



// import Modal_0 from "../Modals/Modal_0"; easter Egg

import Modal_1 from './Bundle_modules/Modal_bundle_01';
import Modal_2 from './Bundle_modules/Modal_bundle_02';
import Modal_3 from './Bundle_modules/Modal_bundle_03';
import Modal_4 from './Bundle_modules/Modal_bundle_04';
import Modal_5 from './Bundle_modules/Modal_bundle_05';
import Modal_6 from './Bundle_modules/Modal_bundle_06';
import Modal_7 from './Bundle_modules/Modal_bundle_07';
import Modal_8 from './Bundle_modules/Modal_bundle_08';
import Modal_9 from './Bundle_modules/Modal_bundle_09';
import Modal_10 from './Bundle_modules/Modal_bundle_10';
import Modal_11 from './Bundle_modules/Modal_bundle_11';
import Modal_12 from './Bundle_modules/Modal_bundle_12';
import Modal_13 from './Bundle_modules/Modal_bundle_13';
import Modal_14 from './Bundle_modules/Modal_bundle_14';
import Modal_15 from './Bundle_modules/Modal_bundle_15';
import Modal_16 from './Bundle_modules/Modal_bundle_16';



export default function Bundles(props) {
  const { onAdd } = props;

 
  function addModal1() {
    ModalService.open(Modal_1);
  };
  function addModal2() {
    ModalService.open(Modal_2);
  };
  function addModal3() {
    ModalService.open(Modal_3);
  };
  function addModal4() {
    ModalService.open(Modal_4);
  };
  function addModal5() {
    ModalService.open(Modal_5);
  };
  function addModal6() {
    ModalService.open(Modal_6);
  };
  function addModal7() {
    ModalService.open(Modal_7);
  };
  function addModal8() {
    ModalService.open(Modal_8);
  };
  function addModal9() {
    ModalService.open(Modal_9);
  };
  function addModal10() {
    ModalService.open(Modal_10);
  };
  function addModal11() {
    ModalService.open(Modal_11);
  };
  function addModal12() {
    ModalService.open(Modal_12);
  };
  function addModal13() {
    ModalService.open(Modal_13);
  };
  function addModal14() {
    ModalService.open(Modal_14);
  };
  function addModal15() {
    ModalService.open(Modal_15);
  };
  function addModal16() {
    ModalService.open(Modal_16);
  };

  return (
    <div className="main-fluid">
      <ModalRoot />
      <h2>Bundle Of movies</h2>
      <h4>
        Get the best movie bundles deals so that you can enjoy the movie to the
        fullest!
      </h4>

      <h3>Horror</h3>

      <div className="row2">
        <div className="column">
          <div className="content">
            <img src={Scream} alt="Scream" width="196px" height="300px" onClick = {addModal1}/>
            <h4>Scream Universe </h4>
            <p>
              Save 164.00 kr
            </p>

            <hr></hr>

            <p>$199</p>
            <button className="Bundlebutton" onClick={onAdd}>
              Buy
            </button>
          </div>
        </div>

        <div className="column">
          <div className="content">
            <img
              src={TheCounjuring}
              alt="TheCounjuring"
              width="196px"
              height="300px"
              onClick = {addModal2}
            />
            <h4>Conjuring Universe </h4>
            <p>
              Save 264.00 kr
            </p>
            <hr></hr>
            <p>$499</p>
            <button className="Bundlebutton">Buy</button>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <img src={ThePurge} alt="ThePurge" width="196px" height="300px" onClick = {addModal3} />
            <h4>The Purge Collection</h4>
            <p>
              Save 67.00 kr
            </p>
            <hr></hr>
            <p>$249</p>
            <button className="Bundlebutton">Buy</button>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <img src={TheRing} alt="TheRing" width="196px" height="300px" onClick = {addModal4}/>
            <h4>The Rings 3-Movie Collection</h4>
            <p>
              Save 78.00 kr
            </p>
            <hr></hr>
            <p>$199</p>
            <button className="Bundlebutton">Buy</button>
          </div>
        </div>

        <h3>Action</h3>

        <div className="row2">
          <div className="column">
            <div className="content">
              <img src={DC} alt="DC" width="196px" height="300px" onClick = {addModal5} />
              <h4>DC 7-Film Collection</h4>
              <p>
                Save 194.00 kr
              </p>
              <hr></hr>
              <p>$499</p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src={BadBoys} alt="BadBoys" width="196px" height="300px" onClick = {addModal6} />
              <h4>Bad Boys 3-Movie Collection</h4>
              <p>
                Save 88.00 kr
              </p>
              <hr></hr>
              <p>$99</p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img
                src={TheLordOfTheRings}
                alt="TheLordOfTheRings"
                width="196px"
                height="300px"
                onClick = {addModal7}
              />
              <h4>The Lord of the Rings Collection</h4>
              <p>
                Save 98.00 kr
              </p>
              <hr></hr>
              <p>$299</p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <img src={XMen} alt="XMen" width="196px" height="300px" onClick = {addModal8} />
              <h4>X-Men Trilogy: Extended Bundle</h4>
              <p>
                Save 48.00 kr
              </p>
              <hr></hr>
              <p>$149</p>
              <button className="Bundlebutton">Buy</button>
            </div>
          </div>

          <h3>Drama</h3>

          <div className="row2">
            <div className="column">
              <div className="content">
                <img src={WW2} alt="WW2" width="196px" height="300px" onClick = {addModal9} />
                <h4>WWII Films 5 Movies</h4>
                <p>
                  Save 146.00 kr
                </p>
                <hr></hr>
                <p>$259</p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img
                  src={TheGodfather}
                  alt="TheGodfather"
                  width="196px"
                  height="300px"
                  onClick = {addModal10}
                />
                <h4>The Godfather Trilogy</h4>
                <p>
                  Save 38.00 kr
                </p>
                <hr></hr>
                <p>$149</p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={Rocky} alt="Rocky" width="196px" height="300px" onClick = {addModal11}/>
                <h4>Rocky Heavyweight </h4>
                <p>
                  Save 245.00 kr
                </p>
                <hr></hr>
                <p>$399</p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={Best} alt="5Best" width="196px" height="300px" onClick = {addModal12}/>
                <h4>Best Picture 5-Film Collection</h4>
                <p>
                  Save 126.00 kr
                </p>
                <hr></hr>
                <p>$139</p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
          </div>
          <h3>Animation</h3>

          <div className="row2">
            <div className="column">
              <div className="content">
                <img src={Shrek} alt="Shrek" width="196px" height="300px" onClick = {addModal13} />
                <h4>Shrek 4-Movie Collection</h4>
                <p>
                  Save 67.00 kr
                </p>
                <hr></hr>
                <p>$369</p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img
                  src={KungFuPanda}
                  alt="KungFuPanda"
                  width="196px"
                  height="300px"
                  onClick = {addModal14}
                />
                <h4>Kung Fu Panda Movie Collection</h4>
                <p>
                  Save 58.00 kr
                </p>
                <hr></hr>
                <p>$199</p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img src={Minions} alt="Minions" width="196px" height="300px" onClick = {addModal15}/>
                <h4>Despicable Me 1-3: Minions</h4>
                <p>
                  Save 67.00 kr
                </p>
                <hr></hr>
                <p>$259</p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
            <div className="column">
              <div className="content">
                <img
                  src={Madagascar}
                  alt="Madagascar"
                  width="196px"
                  height="300px"
                  onClick = {addModal16}
                />
                <h4>Madagascar 4-Movie Collection</h4>
                <p>
                  Save 67.00 kr
                </p>
                <hr></hr>
                <p>$199</p>
                <button className="Bundlebutton">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
