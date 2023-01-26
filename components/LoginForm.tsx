import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {GoMarkGithub} from 'react-icons/go'
import { signIn } from "next-auth/react";

function LoginForm() {
        return (
            <div className='relative w-full h-screen bg-zinc-900/90'>
                <img className='absolute w-full h-full object-cover mix-blend-overlay' src="images/rickandmorty.jpg" alt="/" />
    

            <div className='w-screen h-screen flex justify-end items-center  
                                bg-gradient-to-br from-purple-700 to-amber-700'>
                {/* <form className='p-10 rounded-xl bg-white drop-shadow-lg space-y-5 '> */}
                <form onSubmit={(e)=> e.preventDefault()} className='max-w-[400px] w-full rounded-xl bg-white p-10 drop-shadow-lg'>    
                    <h2 className='text-4xl font-bold text-center py-4'>Rick and Morty</h2>
                    <div className='flex flex-col mb-4'>
                        <label>Username</label>
                        <input className='border relative bg-gray-100 p-2' type="text" />
                    </div>
                    <div className='flex flex-col '>
                        <label>Password</label>
                        <input className='border relative bg-gray-100 p-2' type="password" />
                    </div>
                    <div className='flex justify-between py-8'>
                        
                        <button onClick={() => signIn('github')} className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><GoMarkGithub className='mr-2' /> Github</button>
                        <button onClick={() => signIn('google')} className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</button>
                    </div>
                    <button className='w-full py-3 mt-8 rounded-full cursor-not-allowed bg-indigo-600 hover:bg-indigo-500 relative text-white'>Sign In</button>
                    <p className='flex items-center mt-2'><input className='mr-2' type="checkbox"  />Remember Me</p>
                    <p className='text-center mt-8'>Not a member? <button>Sign up now</button></p>
                </form>
            </div>
        </div>
        )
    
}

export default LoginForm