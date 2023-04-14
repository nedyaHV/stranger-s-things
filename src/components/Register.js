import React, {useState, useEffect} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { registerUser } from "../api/auth";


const Register = ({ user, setUser, token, setToken, isLoggedIn,
     setIsLoggedIn }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
        console.log(username);

        const handleSubmit = async (event) => {
            event.preventDefault();

            const userAuth = {user: {username: username, password:password} };
            //Example below
            const data = await registerUser(userAuth);

            if(data.token) {
                setToken(data.token)
                setUser({username, token: data.token})
                setIsLoggedIn(true)
            }
            setUsername("");
            setPassword("");
            navigate("/login");
        }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username}
            onChange = {(event) => setUsername(event.target.value)} />
            <input type="text" placeholder="Password" value={password} 
            onChange = {(event) => setPassword(event.target.value)} />
            <button type="submit">Signup</button>
        </form>
    </>
    );
};

export default Register;