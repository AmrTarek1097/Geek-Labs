import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";

const Header = () => {
  return (
    <header className="alert_font">

      <div className="flex justify-between ">

        <div className="w-2/12  h-10">
          <img src="/image/street suite logo-04.svg" alt="" />
        </div>

        <div className='flex items-center justify-between bg-[#181818] rounded-xl py-2 px-5 w-10/12'>

            <div className='relative'>
                <input className='bg-[#ffffff] rounded-2xl p-1 px-7  w-96' type="text" placeholder='search'/>
                <GoSearch className='absolute top-2 left-2 text-[#4a4c4f]'/>
            </div>

          <div className='flex relative items-center space-x-5'>
            <IoIosNotifications className=' text-[#554DB7] text-3xl cursor-pointer'/>
            <div className='bg-[#118F4B] text-white rounded-full h-4 w-4 flex justify-center items-center absolute top-2 -left-1'><p>6</p></div>
            <img className='w-[44px] rounded-full' src="/image/admin.png" alt="" />
              <div className='flex-col'>
                <p className='text-[#404040] font-bold text-sm'>Moni Roy</p>
                <p className='text-[#404040] font-bold text-sm'>Admin</p>
              </div>
            <IoIosArrowDropdown className='text-[#404040] text-xl'/>
          </div>

        </div>
      </div>

    </header>
  )
}

export default Header