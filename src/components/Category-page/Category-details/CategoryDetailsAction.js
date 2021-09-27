import React from 'react'
import { useState, useEffect } from 'react'
import "../Category-details/Category-details.css";
import GetMovieDetails from '../Category-details/GetMovieDetails'
import { Link } from "react-router-dom";

function CategoryDetailsAction() {

  const [content, setContent] = useState([]);

  async function fetchMoviesDetails() {
    const MOVIE_DB = `/api/films/`
    const response = await fetch(MOVIE_DB);
    const responseData = await response.json();
    setContent(responseData);
  }

  useEffect(() => {
    fetchMoviesDetails();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <>
      <div className="container-fluid">
        <h2>Action</h2> <Link to="/genre"><button className="Catbutton"><p className="nav-text">Return to Categories</p></button></Link>
        <div className="row2">
          {
            content.map((film) => {
              if (film.genre === "Action") {
                return <GetMovieDetails key={film.apiId} id={film.apiId} title={film.title} />
              }
            })
          }
        </div>
      </div>
    </>
  );
}

export default CategoryDetailsAction;