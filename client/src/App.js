import React from "react"
import './App.css';
import NavBar from './NavBar';
import SignUpPage from './Signup/SignUpPage';
import LoginPage from "./Login/LoginPage";
import CustomerLogin from './Login/CustomerLogin'
import SellerLogin from './Login/SellerLogin'
import SellerSignup from "./Signup/SellerSignup";
import CustomerSignup from "./Signup/CustomerSignup";
import {Routes,Route,BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
        <Route path="/signupForms" element={<SignUpPage/>}/>
        <Route path='/loginForms' element={<LoginPage/>}/>
        <Route path='/customerLogin' element={<CustomerLogin/>}/>
        <Route path='/sellerLogin' element={<SellerLogin/>}/>
        <Route path= '/sellerSignup' element={<SellerSignup/>}/>
        <Route path= '/customerSignup' element={<CustomerSignup/>}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
