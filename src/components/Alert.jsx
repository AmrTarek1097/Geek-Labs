import React from 'react'

const Alert = () => {

  return (
    <div className='Alert_bg border rounded-lg border-white w-full text-2xl bg-[#121213]'>
        <div className="flex justify-between text-white my-4 mx-10 text-xl">
            <div className='flex items-center gap-3'><img src="/image/ticker 1.svg" alt="" /> <p>$TSLA </p></div>
            <div className='flex items-center gap-3'><img src="/image/contract 1.svg" alt="" /> <p>300 Contracts</p> </div>
            <div className='flex items-center gap-3'><img src="/image/volume 1.svg" alt="" /><p>13.2%</p></div>
            <div className='flex items-center gap-3'><img src="/image/risk 1.svg" alt="" /> <p>High risk</p> </div>
        </div>
        <p className='my-6 mx-10'>Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.</p>
    </div>
  )
}

export default Alert