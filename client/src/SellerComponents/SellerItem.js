import React, {useState,useContext} from "react";
import ItemEditForm from "./ItemEditForm";
import { SellerContext } from "../Context/SellerContext";
import { ItemContext } from "../Context/ItemContext";
function SellerItem ({user,userId,item,setSellerItems}) {
    console.log(user)
    const  {
      name,
      id,
      category,
      brand,
      price,
      photo,
      condition,
      size,
      wearer
    } = item
  
    const [errors,setErrors] = useState([])
    const [showEdit, setShowEdit] = useState(true)
    const {sellers,setSellers} = useContext(SellerContext)
    function onDeleteItem (){
      fetch(`/items/${id}`,{
        method: "DELETE"
      })
      .then((r)=> {
        if (r.ok) {
        r.json().then((newItems)=> setSellerItems(newItems))

        } else {
          r.json().then((err)=> setErrors(err.errors))
        }
      })
    }
    return (
        <>
        {item && (
              <div className="item">
              <img alt="itemLogo" src={id === 6 ? "/beanhut.jpg" : photo}/> 
              <div className="itemInfo">
                <h1>{name}</h1>
                {/* <h3>Seller: {seller.username} </h3> */}
                <p><b>Price:</b> ${item.price}</p>
                <p><b>Condition:</b> {condition}</p>
                <p><b>Category:</b> {category}</p>
                <p><b>Size:</b> {size}</p>
                <p><b>Brand:</b> {brand}</p>
                <p><b>For</b> {wearer}</p>
                
                
              </div>
              {showEdit ? (
            <>
              <button className ="editButton" onClick={()=> setShowEdit(false)}>
                <img alt="edit" src="edit.png" />
              </button>
            </>
          ) : (
            <>
              <ItemEditForm setSellerItems={setSellerItems} userId={userId} setShowEdit={setShowEdit} oldName={name} oldCategory={category} oldPrice = {price} oldWearer = {wearer} oldCondition = {condition} oldSize = {size} oldBrand = {brand} oldPhoto ={photo} id={id}/>
              <p>
                Done?
                <button onClick={()=>setShowEdit(true)}>
                  Exit
                </button>
              </p>
            </>
          )}
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
         
        )}
    
    </>
    )
}

export default SellerItem 