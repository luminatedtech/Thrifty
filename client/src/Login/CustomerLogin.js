import React, {useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "../App"
import { TypeContext } from "../App"
import { UserInfoContext } from "../App"
function CustomerLogin () {
const navigate = useNavigate()
const setUserInfo = useContext(UserInfoContext)
const setTypeOfUser = useContext(TypeContext)
const {setUser} = useContext(LoginContext)
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [errors,setErrors] = useState([])
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
            r.json().then((user)=> setUser(user))
            setUserInfo(true)
            setTypeOfUser("customer")
            navigate('/home')
        }
        else {
            r.json().then((err)=> setErrors(err.errors))
        }
    })
}
    return (
        <div className="form_container">
				<form className="loginForm" onSubmit={handleSubmit}>
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
					<button className = "signupButton" type="submit" name="submit" value="Login">
						{isLoading ? "Loading..." : "Login"}
					</button>	
                    {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                {errors.map((error) => (
                 <li key={error}>{error}</li>
                ))}
              </ul>
            )}
				</form>
		</div>
    )
}

export default CustomerLogin