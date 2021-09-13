import './Wishlist.css'

const ListItem = () => {

  let products = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];
  return (
    <div>
    {products.map((product, index) => {
      return <div className="row">
        <div className="col">
          <div className="list-item" key={index}>
            {product}
          </div>
        </div>
      </div>
      })}
    </div>

  )
}

export default ListItem
