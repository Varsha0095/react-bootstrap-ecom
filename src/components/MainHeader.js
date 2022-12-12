import { Navbar, Nav } from "react-bootstrap";
import CartButton from "./CartButton";
import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
    <Navbar className="justify-content-center" bg="dark" variant="dark">
      <Nav>
        <NavLink activeClassName={classes.active} to="/home" className="me-5">
          HOME
        </NavLink>
        <NavLink activeClassName={classes.active} to="/store" className="me-5">
          STORE
        </NavLink>
        <NavLink activeClassName={classes.active} to="/about" className="me-5">
          ABOUT
        </NavLink>
      </Nav>
      <CartButton onShow={props.onShow} />
    </Navbar>
    </header>
  );
};

export default MainHeader;
