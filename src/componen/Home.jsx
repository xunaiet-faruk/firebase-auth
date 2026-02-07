import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';

const Home = () => {
    const provider =new GoogleAuthProvider()
    const [user,setUser] =useState(null)
    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);  
                setUser(result.user);
            })
            .catch(err => console.error(err));
    };

    const handleLogout =() =>{
        signOut(auth)
        .then(()=>{
            setUser(null)
        })
    }

    return (
        <div>
            home
            <div>
                <button onClick={handleLogout}>Logout</button>
                <button onClick={handleLogin}>Google Sign</button>
                <h1>{user?.email}</h1>
                <h1>{user?.displayName}</h1>
                <img src={user?.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Home;