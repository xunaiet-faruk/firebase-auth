import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Signin = () => {

const [show,setShow] =useState(false)

        const handleLogin =e =>{
            e.preventDefault();
            const email =e.target.email.value;
            const password =e.target.password.value;
            console.log(email,password);
            signInWithEmailAndPassword(auth,email,password)
            .then(result =>{
                console.log(result.user);
            }).catch(error =>{
                console.log(error);
            })
        }

    return (
        <div>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className="card bg-base-100 border border-b-indigo-400 w-137.5 shrink-0 shadow-2xl">
                        <div className="card-body ">
                            <fieldset className="fieldset ">
                                <form className='space-y-5' onSubmit={handleLogin} action="">
                                    
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                   
                                   <div className='flex ml-14'>
                                        <input type={show ? "text" : "password"} className="input absolute " name='password' placeholder="Password" />
                                        <button onClick={()=>{setShow(!show)}}>
                                            {
                                                show ? <FaRegEye className='relative  left-72 top-3 text-xl' /> : <FaRegEyeSlash className='relative  left-72 top-3 text-xl' />
                                            }
                                            
                                            
                                        </button>
                                   </div>


                                    <button type='submit' className="btn btn-neutral mt-4 w-[200px] border border-cyan-700 hover:bg-indigo-400">Login</button>
                                </form>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;