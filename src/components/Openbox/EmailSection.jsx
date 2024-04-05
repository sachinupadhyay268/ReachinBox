import React from 'react'
import Frame23 from "../../assets/Frame23.png"

const EmailSection = () => {
    return (
        <div className='bg-black text-white flex flex-col font-sans w-[80%] border border-[#33383F] border-y-0'>
            <div className='border-0 border-b border-[#33383F] p-4 flex flex-row justify-between items-center'>
                <div>
                    <p>Orlando</p>
                    <p className='text-[#FFFFFF66]'>orladom@gmail.com</p>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <div className='bg-[#1F1F1F] border border-[#343A40] px-4 py-2 rounded-lg flex items-center gap-2'>
                        <p className='bg-[#E6D162] w-[10px] h-[10px] rounded-full'></p>
                        <p className='text-[#D3D7DB]'>Meeting Completed</p>
                        <img src={Frame23} alt='fram23.png' className='w-[20px]' />
                    </div>
                    <div className='bg-[#1F1F1F] border border-[#343A40] px-4 py-2 rounded-lg flex items-center gap-2'>
                        <p className='text-[#D3D7DB]'>Move</p>
                        <img src={Frame23} alt='fram23.png' className='w-[20px]' />
                    </div>
                    <div className='bg-[#1F1F1F] border border-[#343A40] p-4 rounded-lg flex flex-row items-center justify-center gap-2'>
                        <p className='bg-[#D9D9D9] w-[3px] h-[3px] rounded-full'></p>
                        <p className='bg-[#D9D9D9] w-[3px] h-[3px] rounded-full'></p>
                        <p className='bg-[#D9D9D9] w-[3px] h-[3px] rounded-full'></p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default EmailSection;