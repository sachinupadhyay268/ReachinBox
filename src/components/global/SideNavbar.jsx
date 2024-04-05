import React, { useState } from 'react';
import { FaCircleChevronRight, } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import reachinLogo from "../../assets/reachinbox-logo.png"
import userIcon from "../../assets/user_icon.png"

import Home from "../../assets/Home.png"
import Email from "../../assets/email.png"
import Email1 from "../../assets/email-1.png"
import Email2 from "../../assets/email-2.png"
import Frame23 from "../../assets/Frame23.png"
import Frame19 from "../../assets/Frame19.png"
import barChart from "../../assets/bar_chart.png"

const SideNavbar = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/openbox",
      icon: Home,
    },
    {
      path: "/inbox",
      icon: Email,
    },
    {
      path: "/inbox",
      icon: Email1,
    },
    {
      path: "/inbox",
      icon: Frame23,
    },
    {
      path: "/inbox",
      icon: Email2,
    },

    {
      path: "/inbox",
      icon: Frame19,
    },
    {
      path: "/inbox",
      icon: barChart,
    },
  ]
  return (
    <div className="flex font-sans min-h-screen relative">
      <div className="sidebar bg-[#101113] w-[80px] py-8 flex flex-col border-[#343A40] border-0 border-r">
        <div className=' flex items-center justify-center h-fit cursor-pointer'>
          <img src={reachinLogo} alt='logo' className='' />
        </div>
        <div className='flex flex-col items-center justify-center gap-6 py-2 flex-1'>
          {
            menuItem.map((item, index) => {
              return (
                <NavLink to={item.path} key={index}>
                  <img className="h-8 w-8" alt="icon-sidebar" src={item.icon} />
                </NavLink>
              )
            })
          }
        </div>
        <div className="flex justify-center items-center py-2 cursor-pointer h-fit">
          <img className="h-8 w-8" src={userIcon} alt="userIcon" />
        </div>
      </div>
      <main className='w-[100%]'>{children}</main>
    </div >
  )
}

export default SideNavbar