import React from "react"
import {Link} from "react-router-dom"
function SignUpPage () {
    return (
        <div>
        <h1> Signup as? </h1>
        <h1> Signup as? </h1>
        <h1> Signup as? </h1>
        <h1> Signup as? </h1>
        <h1> Signup as? </h1>
        <Link to='/sellerSignup'>
            <button className="button"> Signup as Seller</button>
        </Link>
        <Link to='/customerSignup'>
            <button className="button"> Signup as Customer</button>
        </Link>
        </div>
     
    )
}

export default SignUpPage