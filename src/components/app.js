import React, {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar, Login, Posts, Welcome, Register, CreatePost } from './index';
import { getPosts } from '../api';
import { getMe } from '../api/auth';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.token);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const fetchPosts= async() => {
            const {data} = await getPosts();
            setPosts(data.posts);
            // console.log(data.posts);
           if(token) {
            const fetchedUser = await getMe(token)
            setUser(fetchedUser);
            setIsLoggedIn(true);
           }
        };
        fetchPosts();
    }, []);

    useEffect(() => {
        const fetchUser = async () => {
            const fetchedUser = await getMe(token);
            setUser(fetchedUser);
        }
            fetchUser();
    }, [token])

    return (
        <>
        {<Navbar 
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setUser={setUser}
        setToken={setToken}
        />}
        
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
                token={token}
                />} />
            <Route path='/register' element=
            {<Register
                token={token} 
                setToken={setToken} 
                user={user} 
                setUser={setUser} 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn}
                /> } />
            <Route path='/createpost'  element=
            {<CreatePost
                posts={posts}
                setPosts={setPosts}
                isLoggedIn={isLoggedIn}
                token={token}
            /> } />
        </Routes>
        </>
    );
};

export default App;