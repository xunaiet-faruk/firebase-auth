import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';

const Register = () => {
    const [error,setError] =useState(null)
   
    const handlSubmit =e=>{
        e.preventDefault();
       const name =e.target.name.value
       const email =e.target.email.value
       const password =e.target.password.value
       setError(null)
       createUserWithEmailAndPassword(auth,email,password)
       .then(result =>{
        console.log(result.user);
       })
       .catch(error =>{
        setError(error.message)
       })
    }
    return (
        <div className='border-2 border-s-fuchsia-400 w-[500px] mx-auto h-[380px] '>
            
            <div className='space-y-5 mt-5'>
                <h1 className='text-4xl text-center'>Register Here </h1>
                <form onSubmit={handlSubmit} className='space-y-5 ' action="">
                    <input type="text" placeholder="Type here" name='name' className="input" />
                    <input type="email" placeholder="Type here" name='email' className="input" />
                    <input
                        type="password"
                        className="input"
                        name="password"
                        placeholder="Password"
                        required
                        pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}"
                        title="Password must be 6+ chars, include uppercase, lowercase, number & special char"
                    /><br/>
                    <button type='submit' className='btn w-1/2 bg-fuchsia-700 font-bold hover:bg-red-500'>Register</button>

                </form>
                {error && <p className='text-red-400'>{error}</p>}

            </div>
        </div>
    );
};

export default Register;