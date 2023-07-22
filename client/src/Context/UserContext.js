import React,{ createContext, useReducer,useContext  } from "react";
if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]))
}
const initialCart = JSON.parse(localStorage.getItem("cart"))

const initialState = {
    user: {},
    cart: initialCart
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_CART':
     const cartArray = JSON.parse(localStorage.getItem("cart"))
     const cartStatus = [...cartArray, action.payload]
        localStorage.setItem("cart",JSON.stringify(cartStatus))
      return { cart: [...cartStatus]};
    case 'UPDATE_USER':
      return { user: {...state.user, ...action.payload}};
    case 'LOGOUT_AND_EMPTY':
        localStorage.removeItem("cart")
        return {cart: [], user: {}};
    case 'EMPTY':
      localStorage.removeItem("cart")
      return {cart:[]}
    default:
      return initialState;
  }
}


export const UserContext = createContext(initialState);
export const ContextProvider = ({children}) => {
    const [{cart, user}, dispatch] = useReducer(reducer, initialState);

  const UPDATE_CART_ITEMS = (cartItems) => {
    dispatch({
      type: "UPDATE_CART",
      payload: cartItems,
    });
  };

  const LOGOUT_USER = () => {
    dispatch({
      type: "LOGOUT_AND_EMPTY",
    });
  };
  const SUCCESSFUL_PAYMENT = () => {
    dispatch({
      type: "EMPTY",
      payload: []
    })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        cart,
        UPDATE_CART_ITEMS,
        LOGOUT_USER,
        SUCCESSFUL_PAYMENT,
        dispatch
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUserContext must be nested under a valid DataProvider instance");
    return context;
  };