import React from 'react';
import { NavLink } from 'react-router-dom';
import "./style.css"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='navhead'>Stranger's Things</h1>
            <div>
            <NavLink to="/" className={"navlinks"}>Home</NavLink>
            <NavLink to="/Posts" className={"navlinks"}>Posts</NavLink>
            <NavLink to="/login" className={"navlinks"}>Login</NavLink>
            </div>
        </nav>
    )
    
}

export default Navbar;