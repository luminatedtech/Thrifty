import React, {useContext,useState,useEffect} from "react"
import {Link} from "react-router-dom"
import { ItemContext } from "../Context/ItemContext"
import SellerItemList from "./SellerItemList"
function SellerDashboard ({user}) {

// useEffect(()=> {
//     if (user){
//         setUserItems(items.filter((item)=> item.seller_id === user.id))
//     }
    
// },[items,user])
    
        if (user) {
            
            return (
                <div>
                <h1>
                    This is a seller profile
                </h1>
                <h1>
                    This is a seller profile
                </h1>
                <h1>
                    This is a seller profile
                </h1>
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