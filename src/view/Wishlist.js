import ListItem from '../components/Wishlist/ListItem'
import { useSelector } from 'react-redux'

const Wishlist = () => {

  const wishlist = useSelector((state) => state.wishlist.wishlistItems)

  return (
    <div>
      <h3 className="title">Your wishlist</h3>
      {wishlist.map(item => {
        return <ListItem key={item.id} id={item.id} title={item.title}/>
      })}
    </div>
  )
}

export default Wishlist
