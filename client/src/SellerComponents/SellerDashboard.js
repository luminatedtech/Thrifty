import React, {useContext} from "react"
import {Link} from "react-router-dom"
import { ItemContext } from "../Context/ItemContext"
import SellerItemList from "./SellerItemList"
function SellerDashboard ({user}) {
const {items} = useContext(ItemContext)
const userItems = items.filter((item)=> item.seller_id === user.id)
console.log(userItems)
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
           
            {<SellerItemList userId ={user.id} items ={userItems}/>}
           
            
        </div>
    )
}
export default SellerDashboard