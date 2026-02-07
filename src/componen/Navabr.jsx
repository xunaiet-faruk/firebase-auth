import { NavLink } from "react-router";
import './Navbvar.css'
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

const Navabr = () => {
    const provider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(err => console.error(err));
    };

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
    }
    const links =<>
    
    <NavLink className="nav" to={'/'}>
    Home
    </NavLink>
        <NavLink className="nav" to={'/fdsa'}>
    About
    </NavLink>
        <NavLink className="nav" to={'/fdsa'}>
    Sing-in
    </NavLink>
        <NavLink className="nav" to={'/register'}>
    Sign-up
    </NavLink>
    
        <NavLink className="nav" to={'/'}>
            <button className="cursor-pointer" onClick={handleLogout}>Logout</button>

    </NavLink>
        <NavLink className="nav" to={'/'}>
            <button className="cursor-pointer" onClick={handleLogin}>Google Sign</button>

    </NavLink>
    </>
    return (
        <div>
            <div className="navbar border-b-2 border-red-300 mb-5 shadow-sm ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu  text-xl menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl m-12">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </div>
    );
};

export default Navabr;