import React from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import SeeCartButton from "../Cart/SeeCartButton";
import { NavLink } from "react-router-dom";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const CardForm = (props) => {

  const submitHandler = (event) => {
    event.preventDefault();
    
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <Card
          style={{
            height: "10rem",
            backgroundColor: "#808080",
            marginTop: "2px",
          }}
        >
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
          <h1
            style={{
              textAlign: "center",
              fontFamily: "fantasy",
              padding: "20px",
            }}
          >
            MUSIC
          </h1>
        </section>
        <div className="container-fluid">
          <Row className="g-5" md={2} style={{ marginLeft: "200px" }}>
            {productsArr.map((item) => (
              <Col key={item.id}>
               
                  <Card
                    id={item.id}
                    key={item.id}
                    style={{ width: "18rem", height: "18rem", margin: "10px" }}
                  >
                     <NavLink to={`/product/${item.id}`}>
                    <Card.Title className="text-center">
                      {item.title}
                    </Card.Title>
                    <Card.Img width={362} height={260} src={item.imageUrl} />
                    </NavLink>
                    <Card.Footer className="card-footer">
                      ${item.price}
                      <Button
                        style={{ float: "right" }}
                        onClick={() => props.onAddToCart(item)}
                      >
                        Add To Cart
                      </Button>
                    </Card.Footer>
                  </Card>
                
              </Col>
            ))}
          </Row>
        </div>
      </form>
      <Card
        style={{
          marginTop: "5%",
          marginLeft: "40%",
          marginRight: "40%",
          marginBottom: "5%",
        }}
      >
        <SeeCartButton onShow={props.onShow} />
      </Card>
    </>
  );
};

export default CardForm;
