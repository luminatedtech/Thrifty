import React from "react";

function ShoppingCartItem ({id,category,price,condition,wearer,name,seller,photo,brand,size}){
    return (
        <>
        <div className="item">
        <div className="item-image">
            <img className="listingPhoto" src={photo} alt="item" />
          </div>
          <div className="itemInfo">
            <h1> {name}</h1>
            <p><b>Price:</b> ${price}</p>
            <p><b>Condition:</b> {condition}</p>
            <p><b>Category:</b> {category}</p>
            <p><b>Size:</b> {size}</p>
            <p><b>Brand:</b> {brand}</p>
            <p><b>For</b> {wearer}</p>
          </div>
        </div>
     
    </>
    )

}


export default ShoppingCartItem