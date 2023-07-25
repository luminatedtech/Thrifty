import React, {useEffect,useState} from "react";
import Item from "./SellerComponents/SellerItem";
import MensItemList from "./MensItemList";
function MensListing ({typeOfUser,userInfo}) {
    const [mensItems,setMensItems] = useState([])
    useEffect(()=> {
        fetch('/mensItems')
        .then((r)=> r.json())
        .then((items)=>setMensItems(items))
    },[])
console.log(mensItems)
    
    return (
        <div>
        <MensItemList typeOfUser= {typeOfUser} userInfo={userInfo} mensItems ={mensItems} />
        </div>
    )
}

export default MensListing