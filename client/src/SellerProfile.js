import React,{useContext,useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ItemContext } from "./Context/ItemContext";
import ListedItem from "./ListedItem";
import ReviewList from "./ReviewList";

function SellerProfile () {
const [showReviews,setShowReviews] = useState(false)
const sellerId = useParams()
const {items} = useContext(ItemContext)
const sellerItems = items.filter((item)=>item.seller_id == sellerId.seller_id)
return (
    <div className="sellerProfile">
        
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
    { showReviews ? (
                <>
                    {<ReviewList/>}
                    <button className="button" onClick={()=>setShowReviews(false)}> Close </button>
                </>
            ) : (
                <>
                    <button onClick={()=>setShowReviews(true)} className="signUpButton"> View Reviews</button>
                </>
            )

            }
     <div>
       
     </div>
    </div>
)
}
export default SellerProfile