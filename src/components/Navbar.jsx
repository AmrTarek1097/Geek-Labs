import React from "react";

const Navbar = () => {
  // const [navOption, setNavOption] = React.useState(false);

  // const arr= ['Trading', 'Automation', 'Portfolio', 'Alerts', 'Training']

  return (
    <div className=" nav_font p-3 flex justify-around bg-[#181818] text-[#4848484D] h-[115px] my-4 rounded-xl ">
      {/* {arr.map((option,index) => { return <button key={index} onClick={handleClick} className={`sections ${navOption && 'text-white'}`} >{option}</button>})} */}
      <button className="sections relative text-5xl sm:text-base">
        Trading{" "}
        <p className="rounded-full bg-[#554DB7] text-[#ffffff3f] text-sm w-fit px-2 font-thin absolute -top-0 left-7">
          Coming Soon
        </p>
      </button>
      <button className="sections relative">Automation   <p className="rounded-full bg-[#554DB7] text-[#ffffff3f] text-sm w-fit px-2 font-thin absolute -top-0 left-20">
          Coming Soon
        </p></button>
      <button className="sections relative">Portfolio   <p className="rounded-full bg-[#554DB7] text-[#ffffff3f] text-sm w-fit px-2 font-thin absolute -top-0 left-10">
          Coming Soon
        </p></button>
      <button className="sections text-white">Alerts</button>
      <button>Training</button>
    </div>
  );
};

export default Navbar;
