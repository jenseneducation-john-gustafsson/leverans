import './Wishlist.css'

import { FaTimes } from 'react-icons/fa'

//Redux wishlist
import { useSelector, useDispatch } from 'react-redux'
import wishlistSlice from '../../store/wishlistSlice'
import { useEffect } from 'react'

const ListItem = () => {

  // let products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];

  const wishlist = useSelector((state) => state.wishlist.wishlistItems)

  useEffect(() => {

    console.log(wishlist)

  }, [])

  return (
    <div className="wishlist">
      {wishlist.map((product, index) => {
        return <div className="row" key={index}>
          <div className="col-7">
            <div className="list-item">
              {product.name}
            </div>
          </div>
          <div className="col-5">
            <div className="remove">
              <FaTimes />
            </div>
          </div>
        </div>
      })}
    </div>

  )
}

export default ListItem
