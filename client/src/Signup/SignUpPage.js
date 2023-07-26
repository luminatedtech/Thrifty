import React from "react"
import {Link} from "react-router-dom"
function SignUpPage () {
    return (
        <div className="button-container">
        
        <Link to='/sellerSignup'>
            <button className="signupButton"> Signup as Seller</button>
        </Link>
        <Link to='/customerSignup'>
            <button className="signupButton"> Signup as Customer</button>
        </Link>
        </div>
     
    )
}

export default SignUpPage