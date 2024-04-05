import React from 'react'
import refresh from "../../assets/refresh.png"
import arrowdown from "../../assets/arrow_back_ios.png"
import greenCircle from "../../assets/greenCircle.png"
import Frame23 from "../../assets/Frame23.png"

const AllInbox = () => {
    return (
        <div className='bg-black text-white flex flex-col font-sans px-4 py-2 w-[20%]'>
            <div className='flex flex-col'>
                <div className='flex flex-row justify-between items-start py-4'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[#4285F4] font-bold flex items-center gap-1'>All Inbox(s) <span className=''><img src={arrowdown} alt='arrow' className='text-[#4285F4]' /></span> </p>
                        <p className='font-bold'>25/25 <span className='text-[#7F7F7F] font-normal'> Inboxes selected</span> </p>
                    </div>
                    <div className='p-2 bg-[#23272C] rounded-sm cursor-pointer'>
                        <img src={refresh} alt='refresh.png' className='' />
                    </div>
                </div>
                <div className='flex flex-col gap-4 py-4'>
                    <div className='w-[100%]'>
                        <input type='text' placeholder='Search' className='bg-[#23272C] placeholder:text-[#FFFFFF33] text-white font-normal px-4 py-1 border border-[#FFFFFF1A] rounded-md w-[100%]' />
                    </div>
                    <div className='flex flex-row justify-between items-center font-bold'>
                        <div className='flex flex-row items-center gap-2'>
                            <p className='text-[#5C7CFA] bg-[#222426] px-[10px] py-[5px] rounded-[17px] font-normal tracking-wide cursor-pointer'>26</p>
                            <p>New Replies</p>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <p>Newest</p>
                            <img src={arrowdown} alt='arrowdown' className='' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='border-0 border-t border-[#FCFCFC66] py-2 font-bold'>
                    <div className='flex-row flex justify-between items-start'>
                        <div className='flex flex-col'>
                            <p>Beata@gmail.com</p>
                            <p className='font-light'>I've tried a lot and .</p>
                        </div>
                        <p className='text-[#FCFCFC66] font-normal'>Mar 7</p>
                    </div>
                    <div className='flex flex-row gap-2 text-sm py-4 items-center'>
                        <div className='flex flex-row gap-1 bg-[#222426] h-fit items-center px-6 py-2 rounded-2xl cursor-pointer'>
                            <img src={greenCircle} alt='greenCircle' className='text-[#57E0A6] h-fit' />
                            <p className='text-[#57E0A6]'>Interested</p>
                        </div>
                        <div className='flex flex-row gap-1 bg-[#222426] text-xs h-fit items-center px-2 py-1 rounded-2xl cursor-pointer'>
                            <img src={Frame23} alt='send' className='h-fit' />
                            <p>Campaign Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllInbox
