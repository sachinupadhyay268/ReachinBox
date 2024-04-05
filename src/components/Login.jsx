import React from 'react'
import logo from "../assets/Logo.png"
import googleLogo from "../assets/google.png"
import { Link, NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <div className='bg-black h-screen font-sans flex flex-col'>
            <div className='border-[#25262B] border-0 border-b w-full flex items-center justify-center h-[65px]'>
                <img src={logo} alt='logo' className='' />
            </div>

            <div className='w-[100%] flex justify-center items-center flex-1'>
                <div className='bg-[#121212] border border-[#343A40] rounded-2xl flex flex-col gap-10 w-[500px] py-12 '>
                    <div className=' text-white flex flex-col gap-4 text-center items-center'>
                        <p className='font-bold tracking-wide text-lg'>Create a new account</p>
                        <div className='border border-[#707172] rounded-sm flex items-center justify-center gap-4 p-4 w-[70%]'>
                            <img src={googleLogo} alt='google logo' className='w-fit max-w-fit' />
                            <Link to={'/openbox'}>
                                <p className=''>Sign Up with Google</p>
                            </Link>
                        </div>
                    </div>
                    <div className='text-white flex flex-col justify-between items-center gap-6'>
                        <NavLink to={'/openbox'} className='w-[100%] text-center'>
                        <button className='bg-gradient-to-br from-blue-600 via-blue-800 to-blue-900 p-4 rounded-lg w-[40%] text-md'>Create an Account</button>
                        </NavLink>
                        <Link to={'/openbox'}>
                            <p className='text-[#909296]'>Already have an account? <span className='text-white'>Sign In</span></p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='w-[100%] text-[#5C5F66] bg-[#121212] border-[#25262B] border-t border-0 text-sm py-1 text-center h-[32px]'>
                <p>© 2023 Reachinbox. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Login
