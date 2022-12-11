import React, {useContext} from "react";
import { Badge, Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
// import Cart from "./Cart";

const CartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.quantity
    }, 0)
  return (
    <Button variant="outline-info" className="cartbtn" onClick={props.onShow}>
      <span>Cart</span>
      <Badge bg="info" text="dark" >{numberOfItems}</Badge>
    </Button>
  );
};

export default CartButton;
