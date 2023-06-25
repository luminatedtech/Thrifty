import React, {useEffect,useState} from "react";
import Item from "./Item";
import MensItemList from "./MensItemList";
function MensListing () {
    const [mensItems,setMensItems] = useState([])
    useEffect(()=> {
        fetch('/mensItems')
        .then((r)=> r.json())
        .then((items)=>setMensItems(items))
    },[])

    
    return (
        <div>
            <h1>Mens Listing</h1>
            <h1>Mens Listing</h1>
            <h1>Mens Listing</h1>
            <h1>Mens Listing</h1>
            <h1>Mens Listing</h1>
        {<MensItemList mensItems ={mensItems} />}
        </div>
    )
}

export default MensListing