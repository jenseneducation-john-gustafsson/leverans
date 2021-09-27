import './Wishlist.css'

import { FaTimes } from 'react-icons/fa'

const ListItem = () => {

  let products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];
  return (
    <div className="wishlist">
    {products.map((product, index) => {
      return <div className="row" key={index}>
        <div className="col-7">
          <div className="list-item">
            {product}
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
