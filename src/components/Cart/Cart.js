import { useSelector, useDispatch } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { cartActions } from "../../store/cart-slice";

const Cart = (props) => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const authUser = useSelector((state) => state.authenticated.userEmail);
  const isAuth = useSelector((state) => state.authenticated.loggedIn);


  const checkoutCart = () => {

    const requestCartOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: authUser, cart: cartItems })
    }

    return fetch("/api/checkout", requestCartOptions).then(dispatch(cartActions.clearCart()))


  }

  const clearCart = () => {

    dispatch(cartActions.clearCart());

  }

  const showLog = () => {

    console.log("log truey: ", isAuth);
    console.log("username: ", authUser);

  }

  return (
    <div>
      <Card className={classes.cart}>
        <h2>Your Shopping Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
              }}
            />
          ))}
        </ul>
        <p>Total Price</p>
        {cartItems.filter(item => item.id).reduce((total, product) => total + product.price * product.quantity, 0)}:-
      </Card>
      {isAuth && cartItems.length !== 0 ? <button onClick={checkoutCart}>Checkout</button> : <p>Must be logged in and cart can't be empty.</p>}
      {cartItems.length == 0 ? <p>No items</p> : <button onClick={clearCart}>Empty Cart</button>}

    </div>
  );
};

export default Cart;
