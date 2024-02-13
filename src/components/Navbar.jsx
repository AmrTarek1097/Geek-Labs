import React from "react";

const Navbar = () => {


  return (
    <div className=" nav_font p-3 flex justify-around bg-[#181818] text-[#4848484D] h-[115px] my-4 rounded-xl lg:text-5xl  sm:text-2xl text-base ">
      <button className=" relative ">
        Trading{" "}
        <p className="rounded-full bg-[#554DB7] text-[#ffffff3f] lg:text-sm text-xs  w-fit lg:px-2 px-1 font-thin absolute lg:-top-0 sm:top-2 top-0 lg:left-7 left-0 ">
          Coming Soon
        </p>
      </button>
      <span className="sections"></span>
      <button className=" relative">Automation   <p className="rounded-full bg-[#554DB7] text-[#ffffff3f] lg:text-sm text-xs sm:w-fit lg:px-2 px-1 font-thin absolute lg:-top-0 sm:top-2 top-0 lg:left-20 left-3 w-9/12">
          Coming Soon
        </p></button>
        <span className="sections"></span>
      <button className=" relative">Portfolio   <p className="rounded-full bg-[#554DB7] text-[#ffffff3f] lg:text-sm text-xs w-fit lg:px-2 px-1 font-thin absolute lg:-top-0 sm:top-2 top-0 lg:left-10">
          Coming Soon
        </p></button>
        <span className="sections"></span>
      <button className=" text-white">Alerts</button>
      <span className="sections"></span>
      <button>Training</button>
    </div>
  );
};

export default Navbar;
