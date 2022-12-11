import React, {useContext} from "react";
import { Button, Modal, Navbar, Container, Card, Row, Col } from "react-bootstrap";
import './Cart.css';
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

  const removeItemHandler = id => {
    CartCtxt.removeItem(id);
  }
  return (
    <>
      <Modal id='modal' className="modal show" show={true}>
        <Modal.Header>
          <h2 style={{marginLeft: 'auto', fontFamily: 'georgia'}}>Cart</h2>
          <Button className="btn-close" onClick={props.onHide} ></Button>
        </Modal.Header>
          <Navbar bg="light" variant="light">
            <Container>
              <h5 href="#title">Title</h5>
              <h5 href="#price">Price</h5>
              <h5 href="#qty">Quantity</h5>
            </Container>
          </Navbar>
        {CartCtxt.items.map((item) => (
          <Card id={item.id} key={item.id}>
            <Row>
              <Col style={{marginLeft: '5pt'}} ><h6>{item.title}</h6></Col>
              <Col style={{textAlign: 'center', marginRight: '10pt'}}><h6>{item.price}</h6></Col>
              <Col style={{textAlign: 'right', marginRight: '30pt'}} ><h6>{item.quantity}</h6></Col>
            </Row>
            <Card.Body>
              <Card.Img alt="items in cart" src={item.image} className='cardimg' />              
            </Card.Body>
           <span>
           <Button className="closebtn" onClick={removeItemHandler}>Remove Item</Button>
        </span>
        </Card>
        ))}
        <div className="total">Total = </div>
          <Button variant='outline-primary' onClick={props.onHide}>Close</Button>
      </Modal>
    </>
  );
};

export default Cart;
