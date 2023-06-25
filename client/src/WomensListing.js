import React, {useState, useEffect} from "react"
import WomensItemList from "./WomensItemList"
function WomensListing () {
    const [womensItems, setWomensItems] =useState([])
    useEffect(()=> {
        fetch('/womensItems')
        .then((r)=>r.json())
        .then((items)=>setWomensItems(items))
    })
    return (
        <div>
            <h1>Womens Listing</h1>
            <h1>Womens Listing</h1>
            <h1>Womens Listing</h1>
            <h1>Womens Listing</h1>
            <h1>Womens Listing</h1>
        {<WomensItemList womensItems={womensItems}/>}

        </div>
    )
}

export default WomensListing