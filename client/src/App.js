import React, {useState, createContext} from "react"
import './App.css';
import NavBar from './NavBar';
import SignUpPage from './Signup/SignUpPage';
import LoginPage from "./Login/LoginPage";
import CustomerLogin from './Login/CustomerLogin'
import SellerLogin from './Login/SellerLogin'
import SellerSignup from "./Signup/SellerSignup";
import CustomerSignup from "./Signup/CustomerSignup";
import Home from "./Home";
import {Routes,Route,BrowserRouter} from "react-router-dom"
export const LoginContext = createContext(null)
export const TypeContext = createContext(null)
function App() {
  const [user, setUser] = useState(null)
  const [typeOfUser, setTypeOfUser] = useState("")
  return (
    <div className="App">
     <BrowserRouter>
     <LoginContext.Provider value={setUser}>
      <TypeContext.Provider value={setTypeOfUser}>
     <NavBar typeOfUser={typeOfUser} user={user}/>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signupForms" element={<SignUpPage/>}/>
        <Route path='/loginForms' element={<LoginPage/>}/>
        <Route path='/customerLogin' element={<CustomerLogin/>}/>
        <Route path='/sellerLogin' element={<SellerLogin/>}/>
        <Route path= '/sellerSignup' element={<SellerSignup/>}/>
        <Route path= '/customerSignup' element={<CustomerSignup/>}/>
     </Routes>
     </TypeContext.Provider>
     </LoginContext.Provider>
     </BrowserRouter>

    </div>
  );
}

export default App;
