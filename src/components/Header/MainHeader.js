import { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import CartButton from "../Cart/CartButton";
import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';
import AuthContext from "../../NewStore/auth-context";


const MainHeader = (props) => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  }
  return (
    <header className={classes.header}>
    <Navbar className="justify-content-center" bg="dark" variant="dark">
      <Nav>
        {isLoggedIn && (<NavLink activeClassName={classes.active} to="/home" className="me-5">
          HOME 
        </NavLink>)}
        {isLoggedIn &&  (<NavLink activeClassName={classes.active} to="/store" className="me-5">
          STORE
        </NavLink>)}
       {isLoggedIn && (<NavLink activeClassName={classes.active} to="/about" className="me-5">
          ABOUT
        </NavLink>)}
        {isLoggedIn && (<NavLink activeClassName={classes.active} to="/contactus" className="me-5">
         CONTACT US
        </NavLink>)}
        {isLoggedIn && (<NavLink activeClassName={classes.active} to="/profile" className="me-5">PROFILE</NavLink>)}
        
        {!isLoggedIn && (<NavLink activeClassName={classes.active} to="/login" className="me-5">
         LOGIN
        </NavLink>)}
        </Nav>
        {isLoggedIn && (
          <button onClick={logoutHandler}>LOGOUT</button>
        )}
        {isLoggedIn && (
      <CartButton onShow={props.onShow} />)}
      
    </Navbar>
    </header>
  );
};

export default MainHeader;
