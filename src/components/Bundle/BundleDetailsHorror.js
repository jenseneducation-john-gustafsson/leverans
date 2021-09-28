import React from 'react'
import { useState, useEffect } from 'react'
import "../Category-details/Category-details.css";
import GetBundleDetails from './GetBundleDetails'

function BundleDetailsHorror() {

  const [content, setContent] = useState([]);

  async function fetchMoviesDetails() {
    const MOVIE_DB = `/api/bundles`
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
        <h2>Horror</h2>
        <div className="row2">
          {
            content.map((bundle) => {
              if (bundle.genre === "Horror") {
                return <GetBundleDetails key={bundle.id} id={bundle.id} title={bundle.name} price={bundle.price} img={bundle.img} />
              }
            })
          }
        </div>
      </div>
    </>
  );
}

export default BundleDetailsHorror;