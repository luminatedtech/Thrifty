import React, {useState,useContext} from "react"
import { useParams,useNavigate} from "react-router-dom"
import { SellerContext } from "./Context/SellerContext"
import { ReviewContext } from "./Context/ReviewContext"
function ReviewForm () {
const {setSellers,sellers}= useContext(SellerContext)
const {setReviews,reviews} = useContext(ReviewContext)
const navigate = useNavigate()
const sellerId = useParams()
const [comment,setComment] = useState ("")
const [rating, setRating] = useState(1)
const [title, setTitle] = useState("")
const [isLoading,setIsLoading] = useState(false)
const [errors, setErrors] = useState([])
function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    fetch("/reviews", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            comment,
            rating,
            title,
            seller_id: sellerId.seller_id,
        }),
    }).then((r)=> {
        setIsLoading(false)
      
        if (r.ok) {
            const newSellers = []
            r.json().then((review)=>{
            sellers.forEach((seller)=> {
                if (seller.id === review.seller_id){
                 const updatedReviews = [...seller.reviews,review]
                  seller.reviews = updatedReviews
                  
                }
              
                newSellers.push(seller)
    
                
            })
            setReviews([...reviews,review])
            setSellers(newSellers)
          
            navigate('/')
            

        })
            
        } else {
            r.json().then((err)=> setErrors(err.errors))
        }
    })
    
}
    return (
  
    <div className="reviewFormContainer">
        <h2 > Create Review </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label> Title </label>
                     <input
                           type="text"
                           value={title}
                           onChange={(e)=>setTitle(e.target.value)}
                           />
                       </div>
                       <div>
                           <label> Comment </label>
                           <input
                           type="text"
                           value={comment}
                           onChange={(e)=>setComment(e.target.value)}
                           />
                       </div>
                       <div>
                           <label> Stars </label>
                           <input
                           type="integer"
                           value={rating}
                           onChange={(e)=>setRating(e.target.value)}
                           />
                       </div>
                
                       <div>
                           <button className="addReviewsButton" type="submit">
                               {isLoading ? "Loading.." : "Submit Review"}
                           </button>
                       </div>
                       {errors.length > 0 && (
                           <ul style={{ color: "red" }}>
                           {errors.map((error) => (
                            <li key={error}>{error}</li>
                           ))}
                         </ul>
                       )}
                   </form>
               </div>
    )
}

export default ReviewForm