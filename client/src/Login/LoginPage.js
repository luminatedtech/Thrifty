import React from "react"
import {Link} from "react-router-dom"
function LoginPage () {

    return (
        <div>
        <h1> Login as? </h1>
        <h1> Login as? </h1>
        <h1> Login as? </h1>
        <h1> Login as? </h1>
        <h1> Login as? </h1>
        <Link to='/sellerLogin'>
            <button> Login as Seller</button>
        </Link>
        <Link to='/customerLogin'>
            <button> Login as Customer</button>
        </Link>
        </div>
     
    )
}


export default LoginPage