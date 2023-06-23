
import { useContext } from 'react'
import {Link} from "react-router-dom"
import { LoginContext } from './App'
import { TypeContext } from './App'
function NavBar ({user,typeOfUser}) {
const setTypeOfUser = useContext(TypeContext)
const setUser = useContext(LoginContext)
    function handleLogoutClick (){
        console.log(user)
        if (typeOfUser === "customer") {
            fetch("/customerLogout", {method: "DELETE"}).then((r)=> {
                if (r.ok) {
                    setUser(null)
                    setTypeOfUser(null)
                    console.log("logged out as customer");
                }
                else {
                    console.log("customer didnt log out")
                }
            })
        }
        
        else if (typeOfUser === "seller") {
            fetch("/sellerLogout", {method: "DELETE"}).then((r)=> {
                if (r.ok) {
                    setUser(null)
                    setTypeOfUser(null)
                    console.log("logged out as seller")
                }
                else {
                    console.log("customer didnt log out")
                }
            })
        }
    }
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
                     <button className='loginButton' onClick={handleLogoutClick}> Logout</button>
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