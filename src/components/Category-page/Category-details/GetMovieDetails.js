import React from 'react'
import { useState, useEffect } from 'react'


import ModalService from '../../../modules/modals/services/ModalService';
import Modal_0 from '../../Modals/Modal_0';

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

    // Ta bort???
    const addModal = () => {
      ModalService.open(Modal_0);
    };

  return (
    <>
      <div className="column">
        <div className="content">
          <img src={`https://image.tmdb.org/t/p/w300/${content.poster_path}`}
            alt={content.title}
            width="196px"
            height="300px"
            onClick={addModal} />
          <h4>{props.title}</h4>
          <p>{new Date(content.release_date).getFullYear()} | {content.runtime} min</p>
          <button className="Catbutton">Buy</button>
        </div>
      </div>
    </>
  )
}
