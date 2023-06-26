import React, {useState,useEffect} from "react"

const ItemContext = React.createContext()

function ItemProvider({ children }) {
    const [items,setItems] = useState([])

    useEffect(()=> {
       
        fetch(`/items`)
        .then((r)=>r.json())
        .then((items)=>setItems(items))
    },[])
    return <ItemContext.Provider value ={{items,setItems}}>{children}</ItemContext.Provider>

}

export {ItemContext, ItemProvider}