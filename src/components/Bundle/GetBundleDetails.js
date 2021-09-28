import React from 'react'
import { useState, useEffect } from 'react'


//Buy button reducer import
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";


//Wishlist Redux
import { wishlistActions } from '../../store/wishlistSlice';


export default function GetBundleDetails(props) {
  //   const [content, setContent] = useState([]);

  const dispatch = useDispatch();

  //   async function fetchBundleDetails() {
  //     const BUNDLE_SERACH = ``
  //     const response = await fetch(BUNDLE_SERACH);
  //     const responseData = await response.json();
  //     setContent(responseData);
  //   }

  //   useEffect(() => {
  //     fetchBundleDetails();
  //   }, []) // eslint-disable-line react-hooks/exhaustive-deps



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

  const sendToWishlist = () => {

    dispatch(
      wishlistActions.addItemToWishlist({
        id: props.id,
        title: props.name,
        price: props.price,
      })
    );
  }

  return (
    <>
      <div className="column">
        <div className="content">
          <img src={props.img}
            alt=""
            width="196px"
            height="300px"
          />
          <h4>{props.title}</h4>
          <hr />
          <p>{props.price}:-</p>
          <button className="Catbutton" onClick={sendToCart}>Buy</button>
          <button className="Catbutton" onClick={sendToWishlist}>Add to Wishlist</button>
        </div>
      </div>
    </>
  )
}
