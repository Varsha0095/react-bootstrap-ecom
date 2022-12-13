import { Route } from "react-router-dom";
import React, { useState, useContext } from "react";
import Cart from "./components/Cart";
import "./App.css";
import CardForm from "./components/CardForm";
import CartContext from "./store/cart-context";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import MainHeader from "./components/MainHeader";

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
      <Route path="/about">
        <About />
      </Route>
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/store'>
      <MainHeader onShow={handleShow} />
      <CardForm onAddToCart={addToCartHandler} onShow={handleShow} />        
      </Route>
      </main>
      
    </>
  );
};

export default App;
