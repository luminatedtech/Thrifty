import React, {useState,useContext} from "react";
import { LoginContext } from "../App";

function CustomerSignup () {
    const setLogin = useContext(LoginContext)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true)
        fetch("/customerSignup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                password_confirmation: passwordConfirmation
            }),
        }).then((r)=> {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user)=> setLogin(user));
            } else {
                console.log("not working")
            }
        })
    }
    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
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
           
        </form>


        </div>
    )
}

export default CustomerSignup