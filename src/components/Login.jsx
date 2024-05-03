
import React, {useState} from 'react';
import Header from './Header';

import { useGoogleLogin } from '@react-oauth/google';


const Login = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
      });
      


    return (
        
        <div>
            <Header/>
            <div className="">
            <img className='' src="https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg" alt='banner'/>
        </div>
        <form className="flex flex-col w-3/12 p-12 my-36 right-0 left-0 mx-auto items-center justify-center  absolute rounded-md bg-black opacity-90 top-0.5"  >
            <h1 className="text-3xl text-white mb-5 font-bold">Sign Up</h1>
            <div className="flex flex-col">
                <label htmlFor="">Full Name</label>
                <input type="text" placeholder="Fullname" className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white" />
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Email" className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white" />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Password" className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white" />
                {/* <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>Submit</button> */}
                {/* <h1 className='font-bold text-white text-center'>Or</h1> */}
                <button className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium' onClick={() => login()}>Sign in</button>
            
                
            </div>
        </form>
        </div>
    )
}

export default Login;