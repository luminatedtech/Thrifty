import React,{useContext,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { UserInfoContext } from "./App";
import { UserContext, useUserContext } from "./Context/UserContext";
function ListedItem ({userInfo,item,category,price,condition,wearer,name,seller,photo,brand,size,index,id}) {
  const {cart,UPDATE_CART_ITEMS} = useUserContext()

  

  console.log("cart",cart)
  const [isInCart, setIsinCart] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const checkUserAndCart = (item) => { 
    let flag = true
    //Is User logged in? 
    //Is This item already in cart? 
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
   
    console.log(item)
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

              <button disabled={isDisabled} onClick={()=>addItemtoCart(item)}> Add Item to Cart</button>
              </>
            )

            }
        
          </div>
        </div>
     
    </>
    )
}
export default ListedItem