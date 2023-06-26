import React,{useContext} from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "./Context/ItemContext";

import ListedItem from "./ListedItem";
import ReviewList from "./ReviewList";

function SellerProfile () {
   const sellerId = useParams()
    const {items} = useContext(ItemContext)
    
  
const sellerItems = items.filter((item)=>item.seller_id == sellerId.seller_id)

console.log (sellerItems)

return (
    <div>
        <h1>This is a seller profile</h1>
        <h1>This is a seller profile</h1>
        <h1>This is a seller profile</h1>
        {<ReviewList/>}
        <div className="itemList"> {sellerItems.map((item,i)=>(
            <ListedItem  key={item.id} id={item.id} name={item.name} item={item} category={item.category} size={item.size} price={item.price} condition={item.condition} seller={item.seller} wearer={item.wearer} photo={item.photo} brand={item.brand}  index={i}/>
        ))}
    
        </div>
     <div>
       
     </div>
    </div>
)
}
export default SellerProfile