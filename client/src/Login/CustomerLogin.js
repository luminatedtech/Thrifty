import React, {useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../App"
import { TypeContext } from "../App"
import { UserInfoContext } from "../App"
function CustomerLogin () {
const navigate = useNavigate()
const setUserInfo = useContext(UserInfoContext)
const setTypeOfUser = useContext(TypeContext)
const setLogin = useContext(LoginContext)
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [isLoading, setIsLoading] = useState(false)
function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/customerLogin", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password}),
    }).then((r)=> {
        setIsLoading(false);
        if (r.ok) {
            console.log(r)
            r.json().then((user)=> setLogin(user))
            setUserInfo(true)
            setTypeOfUser("customer")
            navigate('/')
        }
        else {
            console.log("didnt work")
        }
    })
}
    return (
        <div className="formContainer">
				<form className="form" onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Enter Username"
						value={username}
						onChange={(e)=> setUsername(e.target.value)}
					/>
					<br />
					<input
						type="password"
						placeholder="Enter Password"
						value={password}
						onChange={(e)=> setPassword(e.target.value)}
					/>
					<br/>
					<button className = "loginButton" type="submit" name="submit" value="Login">
						{isLoading ? "Loading..." : "Login"}
					</button>	
				</form>
		</div>
    )
}

export default CustomerLogin