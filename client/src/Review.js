import React from "react";

function Review ({comment,review,title,rating}) {
    const buyerUsername = review.customer.username
    const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  //
  const starsArray = [...Array(5)].map((_, index) => {
    const starValue = index + 1;
    if (starValue <= fullStars) {
      return <span key={index}>&#9733;</span>; 
    } else if (starValue === fullStars + 1 && halfStar) {
      return <span key={index}>&#9733;</span>; 
    } else {
      return <span key={index}>&#9734;</span>; 
    }
  });
    return (
        <div className="review">
      <div className="reviewContainer">
       <h2> {title} </h2>
        <p className="commenter"><span>{buyerUsername}</span> <em>commented</em> {comment}</p>
       
       {starsArray}
      </div>
    </div>
    )
}

export default Review