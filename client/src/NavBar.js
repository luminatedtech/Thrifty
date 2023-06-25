
import { useContext } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { LoginContext } from './App'
import { TypeContext } from './App'
import { UserInfoContext } from './App'
function NavBar ({user,typeOfUser,userInfo}) {
const navigate = useNavigate()
const setUserInfo = useContext(UserInfoContext)
const setTypeOfUser = useContext(TypeContext)
const setUser = useContext(LoginContext)
    function handleLogoutClick (){
        console.log(user)
        if (typeOfUser === "customer") {
            fetch("/customerLogout", {method: "DELETE"}).then((r)=> {
                if (r.ok) {
                    setUser(null)
                    setUserInfo(false)
                    setTypeOfUser(null)
                    navigate('/')
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
                    setUserInfo(false)
                    setUser(null)
                    setTypeOfUser(null)
                    navigate('/')
                    console.log("logged out as seller")
                }
                else {
                    console.log("seller didnt log out")
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
            { userInfo ? (
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
        { typeOfUser === "seller" &&
            <Link to="/sellerProfile"> 
            <button onClick={()=>console.log("i was clicked")}>
                Seller Dashboard
            </button>
            </Link>
        }
        <button onClick={(()=> console.log(typeOfUser))}>
            check what kind of user 
        </button>
        
        <button onClick={(()=> console.log(user))}>
            check user
        </button>
        <button onClick={(()=> console.log(userInfo))}>
            check userinfo
        </button>
	</header>
    )
}

export default NavBar 