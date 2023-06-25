import React, {useEffect, useState} from "react"
import ItemList from "./ItemList"
function SellerProfile ({user}) {
    
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
            {<ItemList items ={items}/>}
           
            
        </div>
    )
}
export default SellerProfile 