import React from "react";
import { Button, Modal, Navbar, NavLink, Container, Card } from "react-bootstrap";
// import CartButton from "./CartButton";
import './Cart.css';


const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <>
      <Modal id='modal' className="modal show" show={true}>
        <Modal.Header>
          <h2 style={{marginLeft: 'auto', fontFamily: 'georgia'}}>Cart</h2>
          <Button className="btn-close" onClick={props.onHide} ></Button>
        </Modal.Header>
          <Navbar bg="light" variant="light">
            <Container>
              <NavLink href="#title">Title</NavLink>
              <NavLink href="#price">Price</NavLink>
              <NavLink href="#qty">Quantity</NavLink>
            </Container>
          </Navbar>
        {cartElements.map((ele) => (
          <Card>
            <Card.Title style={{display: 'block', marginLeft: '5pt'}} >{ele.title} 
            <span style={{display: 'block', textAlign: 'center'}} >${ele.price} - {ele.quantity}
            </span>
            </Card.Title>
            <Card.Body>
              <Card.Img alt="items in cart" src={ele.imageUrl} className='cardimg' />              
            </Card.Body>
           <span>
           <Button className="closebtn">Remove</Button>
        </span>
        </Card>
        ))}
          <Button variant='outline-primary' onClick={props.onHide}>Close</Button>
      </Modal>
    </>
  );
};

export default Cart;
