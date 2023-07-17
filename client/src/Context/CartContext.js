import React, {useState} from "react"

const CartContext = React.createContext()

function CartProvider ({children}) {
    const [cartItems, setCartItems] = useState([])
   
return <CartContext.Provider value={{setCartItems,cartItems}}> {children}</CartContext.Provider>
}

export {CartContext,CartProvider}