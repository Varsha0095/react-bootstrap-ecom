import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItemsArr;
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItemsArr = [...state.items];
      updatedItemsArr[existingCartItemIndex] = updatedItem;
    } else {
      // updatedItem = {...action.item};
      updatedItemsArr = state.items.concat(action.item);
    }

    return {
      items: updatedItemsArr,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItemsArr;
    if(existingItem.quantity === 1) {
        updatedItemsArr = state.items.filter(item => item.id !== action.id);
    }
    else{
        const updatedItem = {...existingItem, quantity: existingItem.quantity - 1};
        updatedItemsArr = [...state.items];
        updatedItemsArr[existingCartItemIndex] = updatedItem;
    }
    return {
        items: updatedItemsArr,
        totalAmount: updatedTotalAmount,
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  // const [items, setUpdateItems] = useState([]);

  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    // setUpdateItems([...items, item]);
    console.log("InsideHandler", item);
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    // const newItem = [...items];
    // newItem.forEach((element, index) => {
    //     if(id.id === element.id) {
    //         newItem.splice(index, 1);
    //     }
    // });
    // setUpdateItems(newItem);
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
