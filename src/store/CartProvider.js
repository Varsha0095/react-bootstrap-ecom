import React, { useEffect, useState } from "react";
import CartContext from "./cart-context";
import axios from 'axios';

const CartProvider = (props) => {

  const [item, setItem] = useState([]);
  const [initial, setInitial] = useState(false);
  const userMail = localStorage.getItem('email')
  let cleanMail = userMail.split('.').join('')
  cleanMail = cleanMail.split('@').join('')
  console.log(cleanMail);

  useEffect(() => {
    const fetchingData = async () => {
    try{
      const response = await axios.get(`https://crudcrud.com/api/6f1057e80de34b648071e59a0c6cbdb3/${cleanMail}`)
      setItem(response.data);
    }
    catch(error) {
      console.log(error);
    }
    }
    fetchingData();
    setInitial(false);
  },[initial]);

  const addItemToCartHandler = (product) => {
    const newArr = [...item]
    let hasItem = -1;
    newArr.forEach((productItem, index) => {
      if(product.id === productItem.id){
        hasItem = index;
        newArr[index].quantity = newArr[index].quantity + product.quantity;
        
      }
    })
    if(hasItem !== -1){
      axios.post(`https://crudcrud.com/api/6f1057e80de34b648071e59a0c6cbdb3/${cleanMail}`, product).then((res) => {
        console.log(res);
        newArr[hasItem]._id=res.data._id;
        setItem(newArr);
      })
     
    }
    else{
      axios.post(`https://crudcrud.com/api/6f1057e80de34b648071e59a0c6cbdb3/${cleanMail}`, product).then((res) => {
        console.log(res);
        setItem([...item, res.data]);
      })
      
    }
    
  };

  const removeItemFromCartHandler = (id) => {
    const newArr = [...item]
    let hasItem = false;
    newArr.forEach((productItem, index) => {
      if(id === productItem._id && productItem.quantity === 1){
        hasItem = true;
       newArr.splice(index, 1)
        
      }
      else if(id === productItem._id){
        hasItem = true;
        newArr[index].quantity = newArr[index].quantity - 1;
      }
    })
    if(hasItem){
      setItem(newArr);
    }
    else{
      setItem([...item]);
    }
    axios.delete(`https://crudcrud.com/api/6f1057e80de34b648071e59a0c6cbdb3/${cleanMail}/${id}`)
    setInitial(true);
  };
  const cartContext = {
    items: item,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
