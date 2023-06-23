import React from 'react'
import {Link} from "react-router-dom"
function NavBar ({typeOfUser,user}) {

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
            { user ? (
                <>
                     <button className='loginButton'> Logout</button>
                </>
            ) : (
                <>
                 <Link to='/loginForms'>
                    <button className="loginButton"> Login </button>
                </Link>
               
                </>
            )

            }
            
            
        </div>
        <button onClick={(()=> console.log(typeOfUser))}>
            check user
        </button>
        
        <button onClick={(()=> console.log(user))}>
            check user
        </button>
	</header>
    )
}

export default NavBar 