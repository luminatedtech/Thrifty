import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

import { useUserContext } from "./Context/UserContext";
function ListedItem ({typeOfUser, userInfo,item,category,price,condition,wearer,name,seller,photo,brand,size,index,id}) {
  const {cart,UPDATE_CART_ITEMS} = useUserContext()
  
  

  console.log("cart",cart)
  const [isInCart,setIsInCart] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const checkUserAndCart = (item) => { 
    let flag = true
    if (userInfo === true) {
      flag = false
    }
    const hasItemId = (targetId) => cart.some(listing => listing.id === targetId)
    if (!hasItemId(item.id)) { 
      flag = false
    }
    
    console.log(flag)
    setIsDisabled(flag)
  }
  useEffect(()=> {
    checkUserAndCart(item)
  },[cart,item])
  function addItemtoCart (item) {
    UPDATE_CART_ITEMS(item)
    setIsInCart(true)
    console.log(item)
  }
 
    return (
        <>
        <div className="item">
          <div className="item-image">
            <img className="listingPhoto" src={photo} alt="item" />
          </div>
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
            {typeOfUser === "customer" && !isInCart ? (
            <>
              <button
                disabled={isDisabled}
                onClick={() => addItemtoCart(item)}
              >
                Add Item to Cart
              </button>
            </>
          ) : (
            <>
              <div>Item is already in the cart or you are not a customer.</div>
            </>
          )}
        
          </div>
        </div>
     
    </>
    )
}
export default ListedItem