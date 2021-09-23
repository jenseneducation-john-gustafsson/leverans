import React from 'react'
import { useState, useEffect } from 'react'

import Modal_0 from '../../Modals/Modal_0';
import ModalService from '../../../modules/modals/services/ModalService';

export default function GetMovieDetails(props) {
  const [content, setContent] = useState([]);

  async function fetchMoviesDetails() {
    const MOVIE_SERACH = `https://api.themoviedb.org/3/movie/${props.id}?api_key=408a0f0db4860fe4f0ff116aa49d2e56`
    const response = await fetch(MOVIE_SERACH);
    const responseData = await response.json();
    setContent(responseData);
  }

  useEffect(() => {
    fetchMoviesDetails();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps 

   function addModal(title) {
      ModalService.open(Modal_0({title}));
    };
  

  return (
    <>
      <div className="column">
        <div className="content">
          <img src={`https://image.tmdb.org/t/p/w300/${content.poster_path}`}
            alt={content.title}
            width="196px"
            height="300px" 
            onClick={addModal(content.title)} />
          <h4>{props.name}</h4>
          <p>{content.release_date} | {content.runtime} min</p>
          <button className="Catbutton">Buy</button>
        </div>
      </div>
    </>
  )
}
