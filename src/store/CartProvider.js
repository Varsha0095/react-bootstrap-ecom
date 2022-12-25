import React, { useCallback, useContext, useEffect, useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";
import AuthContext from "../NewStore/auth-context";

let initial = true;
const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const [item, setItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const userMail = authCtx.email?.split(".").join("");
  const cleanMail = userMail?.split("@").join("");
  
 
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await axios.get(
          `https://ecom-website-eb6b8-default-rtdb.firebaseio.com/${cleanMail}.json`
        );
        response.data === null ? setItem([]) : setItem(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchingData();
  }, [cleanMail]);

  const addItemToCartHandler = (product) => {
    const newArr = [...item];
    let hasItem = false;
    newArr.forEach((item, index) => {
      if (product.id === item.id) {
        hasItem = true;
        newArr[index].quantity = newArr[index].quantity + product.quantity;
      }
    });

    hasItem ? setItem(newArr) : setItem([...item, product]);
  };

  const addingItems = useCallback (async () => {
    try {
      const response = await axios.put(
        `https://ecom-website-eb6b8-default-rtdb.firebaseio.com/${cleanMail}.json`,
        item
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },[cleanMail, item]);

  const fetchingTotalAmount = useCallback (() => {
    const result = item.reduceRight(
      (prev, item) => (prev += item.price * item.quantity),
      0
    );
    setTotalAmount(result);
  },[item]);
  useEffect(() => {
    if (!initial) {
      initial = true;
      return;
    }
    addingItems();
    fetchingTotalAmount();
  }, [item, addingItems, fetchingTotalAmount]);

  const removeItemFromCartHandler = (id) => {
    const newArr = [...item];
    console.log("product ", id);
    newArr.forEach((productItem, index) => {
      console.log(productItem.id);
      if (id === productItem.id && productItem.quantity === 1) {
        newArr.splice(index, 1);
        setItem(newArr);
      } else if (id === productItem.id) {
        newArr[index].quantity--;
        setItem(newArr);
      }
    });
  };
  const cartContext = {
    items: item,
    totalAmount: totalAmount,
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
/*
 if(newArr.length ===  0)
    {
      axios.post(
        `https://crudcrud.com/api/6a0e2fad25df49899c58c052e5c48463/${cleanMail}`,
        product
      )
      .then((res) => {
        console.log(res);
      });
    }   
    let hasItem = false
    for(let productItem of newArr) {
      //console.log("add");
      if (product.id === productItem.id) {
        console.log("if");
      //let hasItem = true
       // newArr[index].quantity = newArr[index].quantity + product.quantity;
        productItem.quantity = productItem.quantity + product.quantity;
        const id = productItem._id
        delete productItem._id
        // console.log(productItem)
        axios
          .put(
            `https://crudcrud.com/api/6a0e2fad25df49899c58c052e5c48463/${cleanMail}/${id}`,
            productItem
          )
          .then((res) => {
            console.log(res);
          });
         break
       } 
       else {
        axios.post(
            `https://crudcrud.com/api/6a0e2fad25df49899c58c052e5c48463/${cleanMail}`,
            product
          )
          .then((res) => {
            console.log(res);
          });
          break
      }
     
    };
    setInitial(true)

    // hasItem ? setItem(newArr) : setItem([...item, product])
    // console.log(cleanMail);
    // if(hasItem !== -1){
    // //   axios.post(`https://crudcrud.com/api/97001c691ab64c51a3cf868dc9183987/${cleanMail}`, product).then((res) => {
    // //     console.log(res);
    // //     newArr[hasItem]._id=res.data._id;

    // //   })
    //   setItem(newArr);
    // }
    // else{
    //   // axios.post(`https://crudcrud.com/api/97001c691ab64c51a3cf868dc9183987/${cleanMail}`, product).then((res) => {
    //   //   console.log(res);

    //   // })
    //   setItem([...item, product]);
    // }
     useEffect(() => {
    const fetchingData = async () => {
          try {
            const response = await axios.get(
              `https://crudcrud.com/api/21bf892b5e0f4012a487687c7bab9a2a/${cleanMail}`
            );
            response.data === null ? setItem([]) : setItem(response.data);
            console.log(response.data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchingData();
   
  },[cleanMail]);

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
      axios.post(`https://crudcrud.com/api/21bf892b5e0f4012a487687c7bab9a2a/${cleanMail}`, product).then((res) => {
        console.log(res);
        newArr[hasItem]._id=res.data._id;
        setItem(newArr);
      })
    } else{
      axios.post(`https://crudcrud.com/api/21bf892b5e0f4012a487687c7bab9a2a/${cleanMail}`, product).then((res) => {
        console.log(res);
        setItem([...item, res.data]);
      })
    }
  }

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
    axios.delete(`https://crudcrud.com/api/21bf892b5e0f4012a487687c7bab9a2a/${cleanMail}/${id}`)
  };

* */
