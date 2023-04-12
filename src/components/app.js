import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Login, Posts, Welcome } from './index';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return (
        <>
        <Navbar/>
        <h1>Hello from app js</h1>
        <Routes>
            <Route path='./' element={<Welcome user={user} isLoggedIn={isLoggedIn}/>}/>
            <Route path='./Login' element=
                {<Login 
                token={token} 
                setToken={setToken} 
                user={user} 
                setUser={setUser} 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
            />}/>
            <Route path='./posts' element={<Posts posts={posts} setPosts={setPosts}/>} />
        </Routes>
        </>
    );
};

export default App;