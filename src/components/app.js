import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Login, Posts, Welcome, LoginRegister, } from './index';
import { getPosts } from '../api';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchPosts= async() => {
            const {data} = await getPosts();
            setPosts(data.posts);
            console.log(data.posts);
            // if (token) {
            //     const fetchedUser = await getMe(token);
            //     setUser(fetchedUser.user);
            //     setIsLoggedIn(true);
            //     navigate('/posts');
        };
        fetchPosts();
    }, []);

    return (
        <>
        <Navbar/>
        <h1>Hello from app js</h1>
        <Routes>
            <Route path='/' element=
               {<Welcome 
               user={user} 
               isLoggedIn={isLoggedIn} 
               posts={posts} 
               setPosts={setPosts}
               />}/>
            <Route path='/Login' element=
                {<Login 
                token={token} 
                setToken={setToken} 
                user={user} 
                setUser={setUser} 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
            /> }/>
            <Route path='/posts' element=
                {<Posts 
                posts={posts} 
                setPosts={setPosts}
                isLoggedIn={isLoggedIn}
                user={user}
                />} />
            <Route path='/register' element={<LoginRegister/> } />
        </Routes>
        </>
    );
};

export default App;