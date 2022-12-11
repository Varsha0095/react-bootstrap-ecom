import React, { useContext } from "react";
import {
  Button,
  Modal,
  Navbar,
  Container,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import "./Cart.css";
import CartContext from "../store/cart-context";

// const cartElements = [
//   {
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },
//   {
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },
//   {
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];

const Cart = (props) => {
  const CartCtxt = useContext(CartContext);

  const totalAmount = `$${CartCtxt.totalAmount.toFixed(2)}`;
  const hasItems = CartCtxt.items.length > 0;

  // const removeItemHandler = (id) => {
  //   console.log("removed");
  //   CartCtxt.removeItem(id);
  // };
  
  return (
    <>
      <Modal id="modal" className="modal show" show={true}>
        <Modal.Header>
          <h2 style={{ marginLeft: "auto", fontFamily: "georgia" }}>Cart</h2>
          <Button className="btn-close" onClick={props.onHide}></Button>
        </Modal.Header>
        <Navbar bg="light" variant="light">
          <Container>
            <h5 href="#title">Title</h5>
            <h5 href="#price">Price</h5>
            <h5 href="#qty">Quantity</h5>
          </Container>
        </Navbar>
        {CartCtxt.items.map((item) => (
          <Card id={item.id} key={item.id} item={props} >
            <Row>
              <Col style={{ marginLeft: "5pt" }}>
                <h6>{item.title}</h6>
              </Col>
              <Col style={{ textAlign: "center", marginRight: "10pt" }}>
                <h6>${item.price}</h6>
              </Col>
              <Col style={{ textAlign: "right", marginRight: "30pt" }}>
                <h6>{item.quantity}</h6>
              </Col>
            </Row>
            <Card.Body>
              <Card.Img
                alt="items in cart"
                src={item.image}
                className="cardimg"
              />
            </Card.Body>
            <span>
              <Button className="closebtn" onClick={() => props.onRemove(item.id)}>
                Remove Item
              </Button>
            </span>
          </Card>
        ))}
        <div className="total">Total = {totalAmount}</div>
        <Row>
          <Col>
            {hasItems && (
              <Button variant="outline-dark" className="purchaseBtn">
                Purchase
              </Button>
            )}
          </Col>
          <Col>
            <Button
              variant="outline-primary"
              className="closingBtn"
              onClick={props.onHide}
            >
              Close
            </Button>
          </Col>
        </Row>
      </Modal>
    </>
  );
};

export default Cart;
