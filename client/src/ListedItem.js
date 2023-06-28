import React,{useContext,useState} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
function ListedItem ({item,category,price,condition,wearer,name,seller,photo,brand,size,index,id}) {
   console.log(item)
  const {setCartItems,cartItems} = useContext(CartContext)
  const [isInCart, setIsinCart] = useState(false)
    function addItemOnClick (item) {
        setCartItems([...cartItems,item])
        setIsinCart(true)
    }
    return (
        <>
        <div className="item">
          <img alt="itemLogo" src={id === 6 ? "/beanhut.jpg" : photo}/> 
          <div className="itemInfo">
            <h1>{`${index + 1}. ${name}`}</h1>
            <Link to={`/sellerProfile/${seller.id}`}>
            <h3>Seller: {seller.username} </h3>
            </Link>
          
            <p><b>Price:</b> ${price}</p>
            <p><b>Condition:</b> {condition}</p>
            <p><b>Category:</b> {category}</p>
            <p><b>Size:</b> {size}</p>
            <p><b>Brand:</b> {brand}</p>
            <p><b>For</b> {wearer}</p>
            { isInCart ? (
              <>
                  Added
              </>
            ) :(
              <>
              <button onClick={addItemOnClick}> Add Item to Cart</button>
              </>
            )

            }
        
          </div>
        </div>
     
    </>
    )
}
export default ListedItem