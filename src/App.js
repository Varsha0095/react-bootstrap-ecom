import { Route, Switch } from "react-router-dom";
import React, { useState, useContext } from "react";
import Cart from "./components/Cart/Cart";
import "./App.css";
import CardForm from "./components/Card/CardForm";
import CartContext from "./store/cart-context";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import MainHeader from "./components/Header/MainHeader";
import ContactUs from "./components/Pages/ContactUs";
import Product from "./components/Pages/Product";
import LoginPage from "./components/Pages/LoginPage";

let App = (props) => {
  const cartCtx = useContext(CartContext);
  const [show, setShow] = useState(false);
  // const [users, setUsers] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 

  const addToCartHandler = (item) => {
    console.log(item);
    cartCtx.addItem({
      id: item.id,
      title: item.title,
      image: item.imageUrl,
      quantity: 1,
      price: item.price,
    });
  };
  const onRemove = (id) => {
    cartCtx.removeItem(id);
  };

  console.log(cartCtx.items);

  return (
    <>
      {show && <Cart onHide={handleClose} onRemove={onRemove} />}
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/login'>
        <LoginPage />
      </Route>
      <Route path='/product/:id'>
        <Product />
      </Route>
      <Route path='/contactus'>
        <ContactUs />
          {/* <UsersList users={users} /> </ContactUs> */}
      </Route>
      
      <Route path='/store'>
      <MainHeader onShow={handleShow} />
      <CardForm onAddToCart={addToCartHandler} onShow={handleShow} />        
      </Route>
      </Switch>
      </main>
      
    </>
  );
};

export default App;
