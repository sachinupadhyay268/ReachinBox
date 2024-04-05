import React from 'react'
import FrameEmail from "../../assets/FrameEmail.png"
import Frame23 from "../../assets/Frame23.png"
import drafts from "../../assets/drafts.png"

const MailDetails = () => {

    return (
        <div className='bg-black text-white flex flex-col font-sans px-4 py-2 w-[20%]'>
            <div className='flex flex-col gap-2 py-6'>
                <p className='bg-[#23272C] font-bold rounded-xl px-4 py-2'>Lead Details</p>
                <div className='flex flex-col gap-4 px-4 py-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <p>Name</p>
                        <p className='text-[#B9B9B9] text-xs'>Orlando</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>Contact No.</p>
                        <p className='text-[#B9B9B9] text-xs'>+54-9062827869</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>Email ID</p>
                        <p className='text-[#B9B9B9] text-xs'>orlando@gmail.com</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>Linkedin</p>
                        <p className='text-[#B9B9B9] text-xs'>linkedin.com/in/timvadde/</p>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p>Company Name</p>
                        <p className='text-[#B9B9B9] text-xs'>Reachinbox</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 py-6'>
                <p className='bg-[#23272C] font-bold rounded-xl px-4 py-2'>Activities</p>
                <div className='flex flex-col gap-2 px-4 py-4 text-center'>
                    <p className='font-bold'>Campaign Name</p>
                    <div className='flex flex-col gap-6 text-center'>
                        <div className='flex flex-row items-center text-xs gap-2 justify-center'>
                            <p>3 Steps</p>
                            <p className='w-[2px] h-full bg-[#403F3F]'></p>
                            <p>5 Days in Sequence</p>
                        </div>

                        <div className='flex flex-row gap-6 items-start justify-center'>
                            <div className='flex flex-col gap-8'>
                                <img src={FrameEmail} alt='FrameEmail.png' className='' />
                                <img src={FrameEmail} alt='FrameEmail.png' className='' />
                                <img src={FrameEmail} alt='FrameEmail.png' className='' />
                            </div>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-bold'>Step 1: Email</p>
                                    <p className='flex flex-row items-center gap-2 text-xs'><img src={Frame23} alt='drafts' className='' /><span className='font-bold text-[#B9B9B9]'>Sent 3rd, Feb</span></p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-bold'>Step 2: Email</p>
                                    <p className='flex flex-row items-center gap-2 text-xs'><img src={drafts} alt='drafts' className='' /><span className='font-bold text-[#B9B9B9]'>Sent 3rd, Feb</span></p>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <p className='font-bold'>Step 3: Email</p>
                                    <p className='flex flex-row items-center gap-2 text-xs'><img src={drafts} alt='drafts' className='' /><span className='font-bold text-[#B9B9B9]'>Sent 3rd, Feb</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MailDetails
