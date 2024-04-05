import React from 'react'
import SideNavbar from '../global/SideNavbar'
import Navbar from '../global/Navbar'
import heroImg from "../../assets/welcome.png"

const Welcome = () => {
    return (
        <SideNavbar>
            <Navbar />
            <div className='bg-black font-sans text-white flex justify-center items-center' style={{ height: "calc(100vh - 65px)" }}>
                <div className='flex flex-col items-center justify-center gap-8 w-[60%] py-12'>
                    <div className=''>
                        <img src={heroImg} className='w-[100%]' alt='heroImg' />
                    </div>
                    <div className='font-sans font-bold flex flex-col justify-between items-center gap-6 text-xl'>
                        <h3>It’s the beginning of a legendary sales pipeline </h3>
                        <p className='text-[#9E9E9E] w-[65%] text-center font-thin text-sm'>When you have inbound E-mails you’ll see them here</p>
                    </div>
                </div>
            </div>
        </SideNavbar>
    )
}

export default Welcome
