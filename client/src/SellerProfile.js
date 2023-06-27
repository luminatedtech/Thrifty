import React,{useContext,useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ItemContext } from "./Context/ItemContext";
import { LoginContext } from "./App";
import ListedItem from "./ListedItem";
import ReviewList from "./ReviewList";

function SellerProfile () {
   const sellerId = useParams()
    const {items} = useContext(ItemContext)
    const {user,setUser} = useContext(LoginContext)
const sellerItems = items.filter((item)=>item.seller_id == sellerId.seller_id)
console.log(user)
console.log (sellerItems)

return (
    <div>
        <h1>This is a seller profile</h1>
        <h1>This is a seller profile</h1>
        <h1>This is a seller profile</h1>
        {<ReviewList/>}
        {
            <Link to={`/reviewForm/${sellerId.seller_id}`}>
                <button>
                    Write a Review for this Seller
                </button>
            </Link>
        }
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