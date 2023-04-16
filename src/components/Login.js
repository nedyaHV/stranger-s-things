import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import "./style.css"

const Login = ({ user, setUser, token, setToken, isLoggedIn,
     setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
        console.log(username);

        const handleSubmit = async (event) => {
            event.preventDefault();

            const userAuth = {user: {username: username, password:password} };
            //Example below
            const data = await loginUser(userAuth);

            if(data.token) {
                setToken(data.token)
                setUser({username, token: data.token})
                setIsLoggedIn(true)
            }
            setUsername("");
            setPassword("");
            navigate("/posts");
        }

    return (
        <>
        <div className="formdisplay">
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="formheader">Login</h2>
            <input className="formparams" type="text" placeholder="Username" value={username}
            onChange = {(event) => setUsername(event.target.value)} />
            <input className="formparams" type="text" placeholder="Password" value={password} 
            onChange = {(event) => setPassword(event.target.value)} />
            <button className="formbutton" type="submit">Login</button>
            <a href="/register">Do you have an account? Sign up</a>
        </form>
        </div>
    </>
    );
};

export default Login;