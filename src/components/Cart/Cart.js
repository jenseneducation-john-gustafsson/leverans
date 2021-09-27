import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  const authUser = useSelector((state) => state.authenticated.userEmail);
  const isAuth = useSelector((state) => state.authenticated.loggedIn);


  const checkoutCart = () => {

    const requestCartOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: authUser, cart: cartItems })
    }

    return fetch("/api/checkout", requestCartOptions)


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
                title: item.name,
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
      {isAuth ? <button onClick={checkoutCart}>Checkout</button> : <p>Must be logged in.</p>}

    </div>
  );
};

export default Cart;
