import './Wishlist.css'

import { FaTimes } from 'react-icons/fa'

//Redux wishlist
import { useDispatch } from 'react-redux'
import { wishlistActions } from '../../store/wishlistSlice'

const ListItem = (props) => {
  const dispatch = useDispatch();
  const removeWish = () => {dispatch(wishlistActions.removeItemFromWishlist(props.id))}

  return (
    <div className="wishlist">
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
