import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

return (
    <>
        <h1>Hello!</h1>
        <form>
            <input type="text" placeholder="Username" value={username}/>
            <input type="text" placeholder="Password" value={password}/>
            <input type="text" placeholder="Confirm Password" value={password}/>
            <button type="submit">Submit</button>
        </form>
    </>
    );
}

export default LoginRegister;
