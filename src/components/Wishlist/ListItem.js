import './Wishlist.css'

import { FaTimes } from 'react-icons/fa'

//Redux wishlist
import { useSelector, useDispatch } from 'react-redux'
import { wishlistActions } from '../../store/wishlistSlice'
import { useEffect } from 'react'

const ListItem = (props) => {
  const dispatch = useDispatch();
  const removeWish = () => {dispatch(wishlistActions.removeItemFromWishlist(props.id))}
  // let products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];

  const wishlist = useSelector((state) => state.wishlist.wishlistItems)

  useEffect(() => {

    console.log(wishlist)

  }, [])

  return (
    <div className="wishlist">
      {/* {wishlist.map((product, index) => { */}
        <div className="row">
          <div className="col-7">
            <div className="list-item">
              {props.title}
            </div>
          </div>
          <div className="col-5">
            <div className="remove">
             <button onClick={removeWish}> <FaTimes /></button>
            </div>
          </div>
        </div>

    </div>

  )
}

export default ListItem
