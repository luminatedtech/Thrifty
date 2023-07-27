import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./Context/UserContext";
import ShoppingCartItem from "./ShoppingCartItem";
function ShoppingCart () {
    const {cart,dispatch} = useUserContext()
   const sum =  cart.reduce((a,v) =>  a = a + v.price , 0 )
    const clearCartItems = () => {
     
        dispatch({
          type: 'EMPTY',
          payload: [],
        });}
    console.log(cart)
    return (

        <div className="shoppingCartContainer">
                
                <h1>Shopping Cart</h1>
                
                {cart.map((item)=>(
            <ShoppingCartItem key={item.id} id={item.id} name={item.name} item={item} category={item.category} size={item.size} price={item.price} condition={item.condition} seller={item.seller} wearer={item.wearer} photo={item.photo} brand={item.brand} />
        ))}
        <button className="button" onClick={clearCartItems}>
            Clear Cart 
        </button>
        <Link to="/shoppingCart/checkoutPage">
            <button className="button">
                Checkout
            </button>
        </Link>
        <div className="totalCharge">
            <p> Total: ${sum}</p>
        </div>
        </div>
    )
}

export default ShoppingCart