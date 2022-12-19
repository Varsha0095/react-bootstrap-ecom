import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HomeBody from "./HomeBody";
import classes from "../Header/MainHeader.module.css";
import "./Home.css";
import MainHeader from "../Header/MainHeader";

const Home = () => {
  return (
    <>
        <MainHeader>
        <NavLink
              activeClassName={classes.active}
              to="/home"
              className="me-5"
            >
              HOME
            </NavLink>
        </MainHeader> 
        <Card
          style={{
            height: "25rem",
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
            <Button
              variant="outline-info"
              size="lg"
              style={{
                border: "2px solid",
                cursor: "pointer",
                borderRadius: "2px 2px",
                fontSize: '25px',
                width: '20rem',
                height: '4rem',
                
              }}
            >
              Get Our Latest Album
            </Button>
            <Button
              variant="outline-info"
              size="lg"
              style={{
                display: "block",
                borderRadius: "50%",
                height: "5rem",
                width: "5rem",
                border: "2px solid",
                margin: "20px auto",
                cursor: "pointer",
                fontSize: '22px',
              }}
            >
              Play
            </Button>
          </Card.Body>
        </Card>
        <HomeBody />
    </>
  );
};

export default Home;
