import React,{ useState, useEffect} from "react";


const SellerContext = React.createContext();


function SellerProvider({ children }) {
    const [sellers, setSellers] = useState([])

    useEffect(() => {
      fetch("/sellers")
      .then((r)=> r.json())
      .then((sellers)=> setSellers(sellers))
  }, [])
  return <SellerContext.Provider value={{sellers,setSellers}}>{children}</SellerContext.Provider>;
}

export { SellerContext, SellerProvider };