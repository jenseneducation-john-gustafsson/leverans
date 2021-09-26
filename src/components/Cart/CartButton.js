import { useSelector } from "react-redux";

import classes from "./CartButton.module.css";

import { TiShoppingCart } from "react-icons/ti";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button className={classes.button}>
      <TiShoppingCart/>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
