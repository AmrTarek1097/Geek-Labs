import React, { useState } from "react";

const Alert = ({ text }) => {
  const [alert, setAlert] = useState(false);

  const alertHandler = () => {
    setAlert((prevAlert) => {
      return !prevAlert;
    });
    // setAlert(true);
  };

  const openAlert = (
    <div className="flex justify-between text-white my-4 mx-10 text-xl md:text-sm">
      <div className="flex items-center gap-3 md:gap-1 ">
        <img src="/image/ticker 1.svg" alt="" /> <p>$TSLA </p>
      </div>
      <div className="flex items-center gap-3 md:gap-1">
        <img src="/image/contract 1.svg" alt="" /> <p>300 Contracts</p>{" "}
      </div>
      <div className="flex items-center gap-3 md:gap-1">
        <img src="/image/volume 1.svg" alt="" />
        <p>13.2%</p>
      </div>
      <div className="flex items-center gap-3 md:gap-1">
        <img src="/image/risk 1.svg" alt="" /> <p>High risk</p>{" "}
      </div>
    </div>
  );

  return (
    <button className='w-full' onClick={alertHandler}>
      <div
        className={`${
          alert ? "Alert_bg" : "bg-[#121213]"
        } border rounded-lg border-white  text-2xl  mb-2`}
      >
        {alert && openAlert}
        <p className="my-6 mx-10 text-left">
          {text ||
            "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails."}
        </p>
      </div>
    </button>
  );
};

export default Alert;
