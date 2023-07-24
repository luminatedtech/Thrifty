import React from "react"
import {Link} from "react-router-dom"

function LoginPage () {

    return (
        <div className="button-container">
        <Link to='/sellerLogin'>
            <button className="button"> Login as Seller</button>
        </Link>
        <Link to='/customerLogin'>
            <button className="button"> Login as Customer</button>
        </Link>
        </div>
     
    )
}


export default LoginPage