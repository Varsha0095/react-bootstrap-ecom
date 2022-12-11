import React, {useState, useContext} from "react";
import { Nav, NavLink, Navbar} from "react-bootstrap";
import Cart from "./components/Cart";
import CartButton from "./components/CartButton";
import './App.css';
import CardForm from "./components/CardForm";
import CartContext from './store/cart-context';



let App = (props) => {
  const cartCtx = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = (item) => {
    console.log(item);
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      image: item.imageUrl,
      quantity: 1,
      price: item.price
    })
}
const onRemove = (id) => {
  cartCtx.removeItem(id);
}

  console.log(cartCtx.items);

  return (
    <>  
          {show && <Cart onHide={handleClose} onRemove={onRemove} />}
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
      <CardForm onAddToCart={addToCartHandler} />
     
    </>
  );
};

export default App;
