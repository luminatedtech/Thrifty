import React, {useState, useEffect} from "react"
import WomensItemList from "./WomensItemList"
function WomensListing ({typeOfUser}) {
    const [womensItems, setWomensItems] =useState([])
    useEffect(()=> {
        fetch('/womensItems')
        .then((r)=>r.json())
        .then((items)=>setWomensItems(items))
    },[])
    return (
        <div>
        {< WomensItemList typeOfUser= {typeOfUser} womensItems={womensItems}/>}

        </div>
    )
}

export default WomensListing