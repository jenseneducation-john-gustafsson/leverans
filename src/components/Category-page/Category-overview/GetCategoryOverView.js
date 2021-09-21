import React from 'react'
import Products from '../../../products.json';
import GetMovieDetails from '../Category-details/GetMovieDetails'
// Temporärt för att hämta ut fyra filmer per gener. Ändras när databasen är klar
// Action 0, 4
// Comedy 12, 16
// Horror 23, 27
export default function GetCategoryOverView({ start, end }) {
  return (
    <>
      {
        Products.slice(start, end).map(({ film }) => {
          return <GetMovieDetails key={film.id} id={film.id} name={film.name} />
        })
      }
    </>
  )
}
