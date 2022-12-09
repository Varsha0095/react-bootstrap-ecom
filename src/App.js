import React, {useState} from "react";
import {Button, Card, Row, Col, Nav, NavLink, Navbar} from "react-bootstrap";
import Cart from "./components/Cart";
import CartButton from "./components/CartButton";
import './App.css';

const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

let App = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>  
          {show && <Cart onHide={handleClose} />}
     <Navbar className="justify-content-center" bg="dark" variant="dark">
        <Nav>
          <NavLink href="#home" className="me-5">
            HOME
          </NavLink>
          <NavLink href="#store" className="me-5">
            STORE
          </NavLink>
          <NavLink href="#about" className="me-5">
            ABOUT
          </NavLink>
        </Nav>
        <CartButton onShow={handleShow} />
      </Navbar>
      <Card style={{ height: "10rem", backgroundColor: "#808080", marginTop: '2px' }}>
        <Card.Body
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "timesnewroman",
          }}
        >
          <h1 style={{ fontSize: "8rem" }}>The Generics</h1>
        </Card.Body>
      </Card>
      <section id="music" className="container">
        <h1 style={{textAlign: 'center', fontFamily: "fantasy", padding: '20px'}}>MUSIC</h1>
      </section>
      <div className="container-fluid">
      <Row className= "g-5" md={2} style={{marginLeft: '200px'}} >
        {productsArr.map((variant) => (
          <Col>
          <Card style={{width: '18rem', height: '18rem', margin: '10px'}}>
            <Card.Title className="text-center">{variant.title}</Card.Title>
            <Card.Img width={362} height={260} src={variant.imageUrl} />
            <Card.Footer className="card-footer">${variant.price}
            <Button style={{float: 'right'}}>Add To Cart</Button>
            </Card.Footer>
          </Card>
        </Col>
        ))}
      </Row>
      </div>
     
    </>
  );
};

export default App;
