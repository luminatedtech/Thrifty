import React, {useState,useContext} from "react";
import { SellerContext } from "./Context/SellerContext";
function Item ({userId,item,category,price,condition,wearer,name,seller,photo,brand,size,index,id}) {
    console.log(userId)
    const [errors,setErrors] = useState([])
    const {sellers,setSellers} = useContext(SellerContext)
    function onDeleteItem (){
      fetch(`/items/${id}`,{
        method: "DELETE"
      })
      .then((r)=> {
        if (r.ok) {
          const deletedItem = item
          {sellers.map((seller)=> {
            if (seller.id === userId ) {
              const updatedItems = seller.items.filter(item => item.id !== deletedItem.id)
              seller.items = updatedItems
              setSellers([...sellers])
              console.log("deleted")
            }
            else {
              return sellers
            }
          })}
        } else {
          r.json().then((err)=> setErrors(err.errors))
        }
      })
    }
    return (
        <>
        <div className="item">
          <img alt="itemLogo" src={id === 6 ? "/beanhut.jpg" : photo}/> 
          <div className="itemInfo">
            <h1>{`${index + 1}. ${name}`}</h1>
            <h3>Seller: {seller.username} </h3>
            <p><b>Price:</b> ${price}</p>
            <p><b>Condition:</b> {condition}</p>
            <p><b>Category:</b> {category}</p>
            <p><b>Size:</b> {size}</p>
            <p><b>Brand:</b> {brand}</p>
            <p><b>For</b> {wearer}</p>
            
          </div>
          <button className="deleteButton" onClick={onDeleteItem}>
            Delete Item
          </button>
          {/* {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                {errors.map((error) => (
                 <li key={error}>{error}</li>
                ))}
              </ul>
            )} */}
        </div>
     
    </>
    )
}

export default Item 