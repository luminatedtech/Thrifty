import React,{useState} from "react";
import { useUserContext } from "./Context/UserContext";
import ShoppingCartItem from "./ShoppingCartItem";
function ShoppingCart () {
    const {cart} = useUserContext()
    
    console.log(cart)
    return (

        <div>
                <h1>Shopping Cart</h1>
                <h1>Shopping Cart</h1>
                <h1>Shopping Cart</h1>
                <h1>Shopping Cart</h1>
                <h1>Shopping Cart</h1>
                <h1>Shopping Cart</h1>
                <h1>Shopping Cart</h1>
                
                {cart.map((item)=>(
            <ShoppingCartItem key={item.id} id={item.id} name={item.name} item={item} category={item.category} size={item.size} price={item.price} condition={item.condition} seller={item.seller} wearer={item.wearer} photo={item.photo} brand={item.brand} />
        ))}
                
        </div>
    )
}

export default ShoppingCart