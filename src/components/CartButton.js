import React from "react";
import { Button } from "react-bootstrap";
// import Cart from "./Cart";

const CartButton = (props) => {
  return (
    <Button variant="outline-info" className="cartbtn" onClick={props.onShow}>
      <span>Cart</span>
      <span>0</span>
    </Button>
  );
};

export default CartButton;
