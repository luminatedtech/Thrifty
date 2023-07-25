import React,{useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { TypeContext } from "../App";
import { UserInfoContext } from "../App";
function SellerSignup ({setUser}) {
    const setUserInfo = useContext(UserInfoContext)
    const navigate = useNavigate()
    const setTypeOfUser = useContext(TypeContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errors,setErrors] = useState([])
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)
        fetch("/sellerSignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            }),
        }).then((r)=> {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user)=> setUser(user) );
                setUserInfo(true)
                setTypeOfUser("seller")
                navigate('/')
            } else {
                r.json().then((err)=> setErrors(err.errors))
            }
        })
    }
    return (
        <div className="form_container">
            <form className="loginForm" onSubmit={handleSubmit}>
            <input
            placeholder="Username"
            type="text"
            id="username"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            />
            <br/>
            <input
            placeholder="Enter Password"
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            />
            <br/>
            <input
            placeholder="Confirm Password"
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e)=> setPasswordConfirmation(e.target.value)}
            />
            <br/>
          
            <button className="signupButton" type="submit">{isLoading ? "Loading..": "Sign Up"} </button>
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

export default SellerSignup