import React, {useEffect,useState} from "react";
import Item from "./SellerComponents/SellerItem";
import MensItemList from "./MensItemList";
function MensListing (addItemToShoppingCart) {
    const [mensItems,setMensItems] = useState([])
    useEffect(()=> {
        fetch('/mensItems')
        .then((r)=> r.json())
        .then((items)=>setMensItems(items))
    },[])
console.log(mensItems)
    
    return (
        <div>
            <h1>Mens Listing</h1>
            <h1>Mens Listing</h1>
            <h1>Mens Listing</h1>
            <h1>Mens Listing</h1>
            <h1>Mens Listing</h1>
        {<MensItemList addItemToShoppingCart={addItemToShoppingCart} mensItems ={mensItems} />}
        </div>
    )
}

export default MensListing