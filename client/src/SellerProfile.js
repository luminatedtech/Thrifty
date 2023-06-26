import React,{useContext} from "react";
import { ItemContext } from "./Context/ItemContext";
import ListedItem from "./ListedItem";
import {useParams} from "react-router-dom"
function SellerProfile () {
    const sellerId = useParams()
    const {items} = useContext(ItemContext)
    console.log(items)
    console.log(sellerId.seller_id)
const sellerItems = items.filter((item)=>item.seller_id == sellerId.seller_id)
console.log (sellerItems)
return (
    <div>
        <h1>This is a seller profile</h1>
        <h1>This is a seller profile</h1>
        <h1>This is a seller profile</h1>
        <div className="itemList"> {sellerItems.map((item,i)=>(
            <ListedItem  key={item.id} id={item.id} name={item.name} item={item} category={item.category} size={item.size} price={item.price} condition={item.condition} seller={item.seller} wearer={item.wearer} photo={item.photo} brand={item.brand}  index={i}/>
        ))}
    
        </div>

    </div>
)
}
export default SellerProfile