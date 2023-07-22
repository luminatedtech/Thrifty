import React, {useState, createContext,useEffect} from "react"
import {Routes,Route,BrowserRouter} from "react-router-dom"
import './App.css';
import NavBar from './NavBar';
import SignUpPage from './Signup/SignUpPage';
import LoginPage from "./Login/LoginPage";
import CustomerLogin from './Login/CustomerLogin'
import SellerLogin from './Login/SellerLogin'
import SellerSignup from "./Signup/SellerSignup";
import CustomerSignup from "./Signup/CustomerSignup";
import ItemForm from "./SellerComponents/ItemForm";
import Home from "./Home";
import MensListing from "./MensListing";
import WomensListing from "./WomensListing";
import { ItemProvider } from "./Context/ItemContext";
import { SellerProvider } from "./Context/SellerContext"
import { ReviewProvider } from "./Context/ReviewContext";
import SellerDashboard from "./SellerComponents/SellerDashboard";
import SellerProfile from "./SellerProfile";
import ReviewForm from "./ReviewForm";
import ShoppingCart from "./ShoppingCart";
import CheckoutPage from "./CheckoutPage";
import { ContextProvider, UserContext } from "./Context/UserContext";
import { CartContext, CartProvider } from "./Context/CartContext";
export const LoginContext = createContext(null)
export const TypeContext = createContext(null)
export const UserInfoContext = createContext(null)
function App() {
  const [user, setUser] = useState(null)
  const [userInfo, setUserInfo] = useState(false)
  const [typeOfUser, setTypeOfUser] = useState("")
  const [shoppingCartItems,setShoppingCartItem] = useState([])
 

  useEffect(() => {
    fetch('/me').then((r)=> {
      console.log("r",r)
      if (r.ok) {
     console.log("r.ok")
        r.json().then((user) => {
          console.log("user",user)
          setUser(user)
          setTypeOfUser(user.type)
          setUserInfo(true)
          
      
          console.log(typeOfUser)
        })

        
      }
    })
  }, [])
  return (
    <div className="App">
      <ContextProvider>
     <BrowserRouter>
     <CartProvider>
     <ReviewProvider>
     <ItemProvider>
     <SellerProvider>
     <UserInfoContext.Provider value ={setUserInfo}>
     <LoginContext.Provider value={{setUser,user}}>
      <TypeContext.Provider value={setTypeOfUser}>
     <NavBar typeOfUser={typeOfUser} user={user} userInfo={userInfo} />
     
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/shoppingCart/checkoutPage' element={<CheckoutPage/>}/>
        <Route path='/itemForm/:sellerId' element={<ItemForm/>}/>
        <Route path="/signupForms" element={<SignUpPage/>}/>
        <Route path='/loginForms' element={<LoginPage/>}/>
        <Route path='/customerLogin' element={<CustomerLogin/>}/>
        <Route path='/sellerLogin' element={<SellerLogin/>}/>
        <Route path= '/sellerSignup' element={<SellerSignup/>}/>
        <Route path= '/customerSignup' element={<CustomerSignup/>}/>
        <Route path= '/sellerDashboard' element={<SellerDashboard user={user}/>}/>
        <Route path='/mensListing' element ={<MensListing  userInfo={userInfo}/>}/>
        <Route path= '/womensListing' element ={<WomensListing  userInfo={userInfo}/>}/>
        <Route path= '/sellerProfile/:seller_id' element={<SellerProfile/>}/>
        <Route path= '/reviewForm/:seller_id' element={<ReviewForm/>}/>
        <Route path= '/shoppingCart' element={<ShoppingCart/>}/>
     </Routes>
     
     </TypeContext.Provider>
     </LoginContext.Provider>
     </UserInfoContext.Provider>
     </SellerProvider>
     </ItemProvider>
     </ReviewProvider>
     </CartProvider>
     </BrowserRouter>
     </ContextProvider>
    </div>
  );
}

export default App;
