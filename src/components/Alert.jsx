import React, { useState } from "react";

const Alert = ({ text }) => {
  const [alert, setAlert] = useState(false);

  const alertHandler = () => {
    setAlert((prevAlert) => {
      return !prevAlert;
    });
  };

  const openAlert = (
    <div className="flex justify-between xs:space-x-1 space-x-0 text-white my-4 sm:mx-10 mx-3 md:text-xl text-xs">
      <div className="flex items-center lg:gap-3 gap-0 ">
        <img src="/image/ticker 1.svg"  alt="" /> <p>$TSLA </p>
      </div>
      <div className="flex items-center lg:gap-3 gap-0">
        <img src="/image/contract 1.svg"  alt="" /> <p>300 Contracts</p>{" "}
      </div>
      <div className="flex items-center lg:gap-3 gap-0">
        <img src="/image/volume 1.svg"  alt="" />
        <p>13.2%</p>
      </div>
      <div className="flex items-center lg:gap-3 gap-0">
        <img src="/image/risk 1.svg" className="" alt="" /> <p>High risk</p>{" "}
      </div>
    </div>
  );

  return (
    <button className='w-full' onClick={alertHandler}>
      <div
        className={`${
          alert ? "Alert_bg" : "bg-[#121213]"
        } border rounded-lg border-white  md:text-2xl text-base mb-2`}
      >
        {alert && openAlert}
        <p className="my-6 sm:mx-10 mx-3 text-left">
          {text ||
            "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails."}
        </p>
      </div>
    </button>
  );
};

export default Alert;
