import React from 'react'
import { useState, useEffect } from 'react'
import GetBundlesDetails from '../Bundle/GetBundleDetails'

export default function GetBundleOverView({ start, end }) {

  const [content, setContent] = useState([]);

  async function fetchBundlesDetails() {
    const MOVIE_DB = '/api/bundles'
    const response = await fetch(MOVIE_DB);
    const responseData = await response.json();
    setContent(responseData);
    console.log("respons bundles: ", responseData.map(bundles => bundles))
  }

  useEffect(() => {
    fetchBundlesDetails();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps 
  return (
    <>
      {
        content.splice(start, end).map((bundles) => {
          return <GetBundlesDetails key={bundles.id} id={bundles.id} title={bundles.name} price={bundles.price} img={bundles.img} />
        })
      }
    </>
  )
}
