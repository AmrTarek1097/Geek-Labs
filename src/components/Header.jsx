import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <header className="">

      <div className="flex  justify-between ">

        <div className="w-2/12 h-4">
          <img src="/image/street suite logo-04.svg" alt="" />
        </div>

        <div className='flex justify-between bg-[#181818] rounded-lg p-5 w-10/12'>

            <div className='relative'>
                <input className='bg-[#ffffff] rounded-2xl p-2 px-7' type="text" placeholder='search'/>
                <GoSearch className='absolute top-3 left-2 text-[#27282a]'/>
            </div>

          <div className='flex'>
            <img className='' src="/image/Icon.svg" alt="" />
            <img className='w-2/12 rounded-full' src="/image/admin.png" alt="" />
              {/* <div className='flex-col'> */}
                <p className='text-[#404040]'>Moni Roy</p>
                <p className='text-[#404040]'>Admin</p>
              {/* </div> */}
            <IoIosArrowDropdown className='text-[#404040]'/>
          </div>

        </div>
      </div>

    </header>
  )
}

export default Header