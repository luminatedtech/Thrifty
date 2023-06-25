import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import SellerItemList from "./SellerItemList"
function SellerDashboard ({user}) {
    
const [items,setItems] = useState([])
const [reviews,setReviews]=useState([])
useEffect(()=> {
    console.log({user})
    fetch(`/sellers/${user.id}/items`)
    .then((r)=>r.json())
    .then((items)=>setItems(items))
},[])
console.log(items)
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
           
            {<SellerItemList userId ={user.id} items ={items}/>}
           
            
        </div>
    )
}
export default SellerDashboard