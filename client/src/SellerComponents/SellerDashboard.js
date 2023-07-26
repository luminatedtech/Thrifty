import React from "react"
import {Link} from "react-router-dom"
import SellerItemList from "./SellerItemList"
function SellerDashboard ({user}) {
    
        if (user) {
            
            return (
                <div>
                <Link to = {`/itemForm/${user.id}`}>
                    <button> Add an Item </button>
                </Link>
               
                {<SellerItemList user={user} userId ={user.id} />}
               
                
            </div>
            )
        }
        return (
            <div>Loading...</div>
        )
        
       
    
}
export default SellerDashboard