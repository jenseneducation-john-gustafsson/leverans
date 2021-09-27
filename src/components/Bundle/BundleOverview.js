/*css*/
import "./bundle.css";
import { useState, useEffect } from 'react'

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

import GetBundleOverView from "./GetBundleOverview"



export default function BundleOverview(props) {

  const [content, setContent] = useState([]);


  async function fetchMoviesDetails() {
    const MOVIE_DB = `/api/bundles`
    const response = await fetch(MOVIE_DB);
    const responseData = await response.json();
    setContent(responseData);
  }

  useEffect(() => {
    fetchMoviesDetails();
  }, [])
  
  // eslint-disable-line react-hooks/exhaustive-deps 
 

  return (
    <div className="main-fluid">
      {/* <ModalRoot /> */}
      <h2>Bundle Of movies</h2>
      <h4>
        Get the best movie bundles deals so that you can enjoy the movie to the
        fullest!
      </h4>
      <h3>Horror</h3>
      <div className="row2">
        <GetBundleOverView start={0} end={5} />
      </div>

      <h3>Action</h3> 
      <div className="row2">
        <GetBundleOverView  start={5} end={9}/>
      </div> 

      <h3>Comedy</h3>
      <div className="row2">
        <GetBundleOverView  start={9} end={13}/>
      </div>
      <h3>Animation</h3>
      <div className="row2">
        <GetBundleOverView  start={13} end={17}/>
      </div>
    </div>
  );
}
