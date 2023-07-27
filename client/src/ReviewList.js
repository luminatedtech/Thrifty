import React,{useContext,useEffect,useState} from "react";
import { ReviewContext } from "./Context/ReviewContext";
import {useParams} from "react-router-dom"
import Review from "./Review";
function ReviewList ({sellerReviews}) {
    
    console.log(sellerReviews)
    return (
        <div className="reviewList">
            {sellerReviews.map((review)=> (
                <Review  review={review} key={review.id} rating={review.rating} title={review.title} comment={review.comment}/>
            ))

            }
        </div>
    )
}

export default ReviewList