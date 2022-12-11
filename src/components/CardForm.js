import React from 'react';
import { Button, Row, Col, Card } from "react-bootstrap";


const productsArr = [
    {
      id: 'p1',
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      id: 'p2',
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      id: 'p3',
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      id: 'p4',
      title: "Blue Color",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
const CardForm = (props) => {
  // const amountInputRef = useRef(); 
  const submitHandler = event => {
    event.preventDefault();

      // const enteredAmount = amountInputRef.current.value;
      // const enteredAmountNumber = +enteredAmount;

      // if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 10){
      //   return;
      // }
      // props.onAddToCart(enteredAmountNumber);
  }
    return (
        <form onSubmit={submitHandler}>
        <Card style={{height: '10rem', backgroundColor: '#808080', marginTop: '2px'}} >
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
        {productsArr.map((item) => (
          <Col>
          <Card id={item.id} key={item.id} style={{width: '18rem', height: '18rem', margin: '10px'}}>
            <Card.Title className="text-center">{item.title}</Card.Title>
            <Card.Img width={362} height={260} src={item.imageUrl} />
            <Card.Footer className="card-footer">${item.price}
            <Button style={{float: 'right'}} onClick= { () => props.onAddToCart(item)} >Add To Cart</Button>
            </Card.Footer>
          </Card>
        </Col>
        ))}
      </Row>
      </div>
      </form>
    )
};

export default CardForm;