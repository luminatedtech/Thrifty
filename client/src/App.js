import React from "react"
import './App.css';
import NavBar from './NavBar';
import SignUpPage from './SignUpPage';
import {Routes,Route,BrowserRouter} from "react-router-dom"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
        <Route path="/signUpForms" element={<SignUpPage/>}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
