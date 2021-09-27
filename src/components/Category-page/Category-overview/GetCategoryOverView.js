import React from 'react'
import { useState, useEffect } from 'react'
import GetMovieDetails from '../Category-details/GetMovieDetails'

export default function GetCategoryOverView({ start, end }) {

  const [content, setContent] = useState([]);

  async function fetchMoviesDetails() {
    const MOVIE_DB = `/api/films`
    const response = await fetch(MOVIE_DB);
    const responseData = await response.json();
    setContent(responseData);
  }

  useEffect(() => {
    fetchMoviesDetails();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <>
      {
        content.slice(start, end).map((film) => {
          return <GetMovieDetails key={film.apiId} id={film.apiId} title={film.title} />
        })
      }
    </>
  )
}
