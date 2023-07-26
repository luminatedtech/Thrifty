import React from "react"
import {Link} from "react-router-dom"
import SellerItemList from "./SellerItemList"
function SellerDashboard ({user}) {
    
        if (user) {
            
            return (
                <div className="sellerDashboardContainer">
               
                {<SellerItemList user={user} userId ={user.id} />}
                <div className="sellerdashBoardButtonContainer">
                    <Link to = {`/itemForm/${user.id}`}>
                    <button> Add an Item </button>
                    </Link>
                </div>
                
               
                
            </div>
            )
        }
        return (
            <div>Loading...</div>
        )
        
       
    
}
export default SellerDashboard