
import { useContext } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { LoginContext } from './App'
import { TypeContext } from './App'
import { UserInfoContext } from './App'
import { useUserContext } from './Context/UserContext'
function NavBar ({user,typeOfUser,userInfo}) {

const {cart,LOGOUT_USER} = useUserContext()
const navigate = useNavigate()
const setUserInfo = useContext(UserInfoContext)
const setTypeOfUser = useContext(TypeContext)
const {setUser} = useContext(LoginContext)
  const handleLogoutClick = () => {
        console.log(user)
        if (typeOfUser === "customer") {
            fetch("/customerLogout", {method: "DELETE"}).then((r)=> {
                if (r.ok) {
                    setUser(null)
                    setUserInfo(false)
                    setTypeOfUser(null)
                    LOGOUT_USER()
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
                    navigate('/')
                    setUserInfo(false)
                    setUser(null)
                    setTypeOfUser(null)
                    
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
        <div className="logo">
            <Link to ="/" >
                <img alt="homeLogo" className="navBarLogo" src="thrifty-logo.png"/>
            </Link>
        </div>
        <div className="navbar">
        { typeOfUser === "seller" && 
            <Link to="/sellerDashboard"> 
            <button className='sellerDashBoardButton'>
                Seller Dashboard
            </button>
            </Link>
        }
            { typeOfUser === "customer" &&
            <Link to='/shoppingCart'>
                <button className='shoppingCartButton'> Shopping Cart {cart.length} </button>
            </Link>
            }
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
      
       
      
	</header>
    )
}

export default NavBar 