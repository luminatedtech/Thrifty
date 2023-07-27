import React,{useContext,useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ItemContext } from "./Context/ItemContext";
import ListedItem from "./ListedItem";
import ReviewList from "./ReviewList";

function SellerProfile () {
const [showReviews,setShowReviews] = useState(false)
const sellerId = useParams()
const {items} = useContext(ItemContext)
const [sellerReviews,setSellerReviews] = useState([])
const sellerItems = items.filter((item)=>item.seller_id == sellerId.seller_id)
useEffect(()=> {
    fetch(`/sellers/${sellerId.seller_id}/reviews`)
    .then((r)=> r.json())
    .then((reviews)=> setSellerReviews(reviews))
},[])
console.log(sellerId.seller_id)
return (
    <div className="sellerProfile">
        
       
        <div className="itemList"> {sellerItems.map((item,i)=>(
            <ListedItem  key={item.id} id={item.id} name={item.name} item={item} category={item.category} size={item.size} price={item.price} condition={item.condition} seller={item.seller} wearer={item.wearer} photo={item.photo} brand={item.brand}  index={i}/>
        ))}
        </div>
   <div className="buttonContainer">
   { showReviews ? (
                <>
                    {<ReviewList sellerReviews={sellerReviews}/>}
                    <button className="reviewButton" onClick={()=>setShowReviews(false)}> Close </button>
                </>
            ) : (
                <>
                    <button onClick={()=>setShowReviews(true)} className="reviewButton"> View Reviews</button>
                </>
            )

            }
             {
            <Link to={`/reviewForm/${sellerId.seller_id}`}>
                <button className="reviewButton">
                    Write a Review
                </button>
            </Link>
        }
   </div>
    
    </div>
)
}
export default SellerProfile