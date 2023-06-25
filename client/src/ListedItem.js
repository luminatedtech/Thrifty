import React from "react";

function ListedItem ({item,category,price,condition,wearer,name,seller,photo,brand,size,index,id}) {
   console.log(item)

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
        </div>
     
    </>
    )
}
export default ListedItem