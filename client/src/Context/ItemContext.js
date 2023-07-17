import React, {useState,useEffect} from "react"

const ItemContext = React.createContext()

function ItemProvider({ children }) {
    const [items,setItems] = useState([])
    function fetchItems () {
        fetch(`/items`)
        .then((r)=>r.json())
        .then((items)=>setItems(items))
    }
    useEffect(()=> {
       fetchItems()
    },[])
    return <ItemContext.Provider value ={{items,fetchItems}}>{children}</ItemContext.Provider>

}

export {ItemContext, ItemProvider}