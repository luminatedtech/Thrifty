import React from 'react'
import {Link} from "react-router-dom"
function NavBar () {

    return (
    <header>
        <div className="logoContainer">
            <Link to ="/" >
                <img alt="coffeephoto" className="navBarLogo" src="coffeelogo.png"/>
                <p>Thirfty</p>
            </Link>
        </div>
        <div className="navbarButtonContainer">
            <Link to='/signupForms'>
            <button className="signupButton">Signup</button>
            </Link>
            <Link to='/loginForms'>
            <button className="loginButton"> Login </button>
            </Link>
            
        </div>
	</header>
    )
}

export default NavBar 