import React from "react"
import {Link} from "react-router-dom"

function LoginPage () {

    return (
        <div className="button-container">
        <Link to='/sellerLogin'>
            <button className="signupButton"> Seller Login</button>
        </Link>
        <Link to='/customerLogin'>
            <button className="signupButton"> Customer Login</button>
        </Link>
        </div>
     
    )
}


export default LoginPage