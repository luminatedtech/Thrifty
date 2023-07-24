import React, {useState,useEffect} from "react";
import SellerItem from "./SellerItem";
function SellerItemList ({userId,user}) {
  const [sellerItems, setSellerItems] = useState([])
    console.log(userId)
    useEffect(()=> {
      fetch('/seller_list').then((r)=> {
        
        r.json().then((seller_list)=> {
          console.log(seller_list)
          setSellerItems(seller_list)} )
      })
        
      
    },[])
  
    return (
        <div className="itemList"> {sellerItems && sellerItems.length > 0 && sellerItems.map((item,i)=>(
            <SellerItem 
              user = {user}
              userId={userId} 
              item={item}
              setSellerItems ={setSellerItems}
              index={i}/>
        ))}
    
        </div>
    )
}

export default SellerItemList