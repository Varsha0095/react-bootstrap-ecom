import { Route, Switch, Redirect } from "react-router-dom";
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
import ProfilePage from "./components/Pages/ProfilePage";
import AuthContext from "./NewStore/auth-context";

let App = (props) => {
  const authCtx = useContext(AuthContext);
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
          {!authCtx.isLoggedIn && <Route path="/" exact>
            <LoginPage />
          </Route>}
          {authCtx.isLoggedIn && <Route path="/" exact>
          <MainHeader onShow={handleShow} />
      <CardForm onAddToCart={addToCartHandler} onShow={handleShow} /> 
            </Route>}
      <Route path="/about">
      {authCtx.isLoggedIn && <About />}
      {!authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>
      <Route path='/home'>
      {authCtx.isLoggedIn && <Home />}
      {!authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>
      {!authCtx.isLoggedIn && <Route path='/login'>
        <LoginPage />
      </Route>}
      {authCtx.isLoggedIn && <Route path='/product/:id'>
        <Product />
      </Route>}
      <Route path='/contactus'>
      {authCtx.isLoggedIn && <ContactUs />}
      {!authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>
      <Route path="/profile">
      {authCtx.isLoggedIn && <ProfilePage />}
      {!authCtx.isLoggedIn && <Redirect to="/login" />}
      </Route>
      <Route path='/store'>
      <MainHeader onShow={handleShow} />
      {authCtx.isLoggedIn && <CardForm onAddToCart={addToCartHandler} onShow={handleShow} />} 
      {!authCtx.isLoggedIn && <Redirect to="/login" />}     
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
      </Switch>
      </main>
      
    </>
  );
};

export default App;
