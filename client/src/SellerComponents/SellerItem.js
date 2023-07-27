import React, {useState} from "react";
import ItemEditForm from "./ItemEditForm";

function SellerItem ({userId,item,setSellerItems}) {
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
              <img className="listingPhoto" alt="itemLogo" src={id === 6 ? "/beanhut.jpg" : photo}/> 
              <div className="itemInfo">
                <h1>{name}</h1>
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
              <img alt="Edit" src="editbutton.png" style={{ width: "24px", height: "24px" }} />
              </button>
            </>
          ) : (
            <>
              <ItemEditForm setSellerItems={setSellerItems} userId={userId} setShowEdit={setShowEdit} oldName={name} oldCategory={category} oldPrice = {price} oldWearer = {wearer} oldCondition = {condition} oldSize = {size} oldBrand = {brand} oldPhoto ={photo} id={id}/>
              <p>
              
                <button className="signUpButton" onClick={()=>setShowEdit(true)}>
                  Exit
                </button>
              </p>
            </>
          )}
              <button className="deleteButton" onClick={onDeleteItem}>
                Delete 
              </button>
             
            </div>
         
        )}
         {errors.length > 0 && (
                           <ul style={{ color: "red" }}>
                           {errors.map((error) => (
                            <li key={error}>{error}</li>
                           ))}
                         </ul>
                       )}
    
    </>
    )
}

export default SellerItem 