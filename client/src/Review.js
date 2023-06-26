import React,{useContext,useState} from "react";
import { SellerContext } from "./Context/SellerContext";

function Review ({comment,review,title}) {
    // const [showEdit, setShowEdit] = useState(true)
    // const [errors,setErrors] = useState([])
    
    return (
        <div className="review">
      <div className="reviewContainer">
        <p className="commenter"><span>This guy</span> <em>commented</em> {comment}</p>
        <h2> {title} </h2>
        {/* <p> This gets {stars} stars! </p> */}
      </div>
      {/* {showEdit ? (
        <>
          <button className ="editButton" onClick={()=> setShowEdit(false)}>
            <img alt="edit" src="edit.png" />
          </button>
        </>
      ) : (
        <>
          <EditForm setShowEdit={setShowEdit} shopId={shopId} oldStars={stars} oldComment={comment} oldTitle={title} id={id}/>
          <p>
            Done?
            <button onClick={()=>setShowEdit(true)}>
              Exit
            </button>
          </p>
        </>
      )}
      <button className ="deleteButton" onClick={onDeleteReview}>
        <img alt="delete" src="delete.png" />
      </button> */}
    
    </div>
    )
}

export default Review