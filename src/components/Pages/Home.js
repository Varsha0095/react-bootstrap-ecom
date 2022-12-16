import { Navbar, Nav, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HomeBody from "./HomeBody";
import classes from "../MainHeader.module.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <header className={classes.header}>
        <Navbar className="justify-content-center" bg="dark" variant="dark">
          <Nav>
            <NavLink
              activeClassName={classes.active}
              to="/home"
              className="me-5"
            >
              HOME
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              to="/store"
              className="me-5"
            >
              STORE
            </NavLink>
            <NavLink
              activeClassName={classes.active}
              to="/about"
              className="me-5"
            >
              ABOUT
            </NavLink>
          </Nav>
        </Navbar>
        </header>
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
