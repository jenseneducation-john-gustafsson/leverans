import React from 'react'
import { useState, useEffect } from 'react'


import ModalService from '../../../modules/modals/services/ModalService';
import Modal_0 from '../../Modals/Modal_0';

//Buy button reducer import
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

//Wishlist button
import { wishlistActions } from '../../../store/wishlistSlice';


export default function GetMovieDetails(props) {
  const [content, setContent] = useState([]);

  const dispatch = useDispatch();

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



  //Buy button reducer
  const sendToCart = () => {

    dispatch(
      cartActions.addItemToCart({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  }


  const sendToWishlist = () => {

    dispatch(
      wishlistActions.addItemToWishlist({
        id: props.id,
        title: props.title,
        price: props.price,
      })
    );
  }

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
          <p> {props.price}:-</p>
          <button className="Catbutton" onClick={sendToCart}>Buy</button>
          <button className="Catbutton" onClick={sendToWishlist}>Add to Wishlist</button>
        </div>
      </div>
    </>
  )
}
