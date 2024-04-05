import React from 'react'
import Ellipse from "../../assets/Ellipse2938.png"
import lightMode from "../../assets/light_mode.png"
import arrow from "../../assets/arrow_back_ios.png"

const Navbar = () => {
    return (
        <div className='w-[100%] bg-[#1F1F1F] h-[65px] border border-[#343A40] text-white font-sans font-bold flex justify-between items-center px-6'>
            <div>
                <h4>Onebox</h4>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex border border-[#343A40] rounded-2xl w-fit p-1 gap-4 cursor-pointer'>
                    <img src={Ellipse} className='w-[100%]' />
                    <img src={lightMode} className='w-[100%]' />
                </div>
                <div className='flex gap-2 items-center'>
                    <p>Tim's Workspace</p>
                    <img src={arrow} className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
