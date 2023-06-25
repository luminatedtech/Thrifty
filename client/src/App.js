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
import ItemForm from "./ItemForm";
import Home from "./Home";
import { SellerProvider } from "./Context/SellerContext";
import SellerProfile from "./SellerProfile";
export const LoginContext = createContext(null)
export const TypeContext = createContext(null)
export const UserInfoContext = createContext(null)
function App() {
  const [user, setUser] = useState(null)
  const [userInfo, setUserInfo] = useState(null)
  const [typeOfUser, setTypeOfUser] = useState("")
  // useEffect(() => {
  //   fetch('/me').then((r)=> {
      
  //     if (r.ok) {
  //       console.log(r)
  //       r.json().then((user) => console.log(user))
  //       setUserInfo(true)

        
  //     }
  //   })
  // }, [])
  return (
    <div className="App">
     <BrowserRouter>
     <SellerProvider>
     <UserInfoContext.Provider value ={setUserInfo}>
     <LoginContext.Provider value={setUser}>
      <TypeContext.Provider value={setTypeOfUser}>
     <NavBar typeOfUser={typeOfUser} user={user} userInfo={userInfo} />
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/itemForm/:sellerId' element={<ItemForm/>}/>
        <Route path="/signupForms" element={<SignUpPage/>}/>
        <Route path='/loginForms' element={<LoginPage/>}/>
        <Route path='/customerLogin' element={<CustomerLogin/>}/>
        <Route path='/sellerLogin' element={<SellerLogin/>}/>
        <Route path= '/sellerSignup' element={<SellerSignup/>}/>
        <Route path= '/customerSignup' element={<CustomerSignup/>}/>
        <Route path= '/sellerProfile' element={<SellerProfile user={user}/>}/>
     </Routes>
     </TypeContext.Provider>
     </LoginContext.Provider>
     </UserInfoContext.Provider>
     </SellerProvider>
     </BrowserRouter>

    </div>
  );
}

export default App;
