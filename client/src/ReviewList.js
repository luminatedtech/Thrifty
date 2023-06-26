import React,{useContext} from "react";
import { ReviewContext } from "./Context/ReviewContext";
import {useParams} from "react-router-dom"
import Review from "./Review";
function ReviewList () {
    const sellerId = useParams()
    console.log(sellerId)
    const {reviews,setReviews} = useContext(ReviewContext)
    const sellerReviews = reviews.filter((review)=> review.seller_id == sellerId.seller_id)
    console.log(sellerReviews)
    return (
        <div className="reviewList">
            {sellerReviews.map((review)=> (
                <Review  review={review} title={review.title} comment={review.comment}/>
            ))

            }
        </div>
    )
}

export default ReviewList