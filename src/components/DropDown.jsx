import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaRegCircleCheck } from "react-icons/fa6";
import { SlLayers } from "react-icons/sl";

const DropDown = ({
  label,
  optionArr,
  selected,
  setSelected,
  handleSetValue,
 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isChoosen, setIsChoosen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative filter_font inline-block text-left w-full space-y-1">
      <label
        className="block text-sm font-normal text-white mb-2"
        htmlFor="name"
      >
        {label}
      </label>
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex justify-between w-full px-4 py-3 text-sm font-normal text-[#A3A3A3] bg-[#212121] border border-white rounded-lg focus:border-2"
      >
        <div className="flex items-center gap-x-3">
          <SlLayers className="text-xl"/> {selected}
        </div>
        {isOpen ? (
          <IoIosArrowUp className="text-xl text-black" />
        ) : (
          <IoIosArrowDown className="text-xl text-black" />
        )}
      </button>
      <p className="text-[#6B6B6B] text-sm font-normal pt-2">{!isChoosen ? 'Choose Somthing.':'Press Apply to see changes.'}</p>

      {isOpen && (
        <div className="absolute z-10 right-0 left-0 mt-2  top-20 text-[#A3A3A3] bg-[#212121] border border-white rounded-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 space-y-3">
            {optionArr?.map((option, index) => {
              return (
                <a
                  key={index}
                  onClick={() => {
                    setSelected(option);
                    setIsOpen(false);
                    handleSetValue(option);
                    setIsChoosen(true)
                  }
                  }
                  className={`${selected === option ? 'text-[#554DB7]' : 'text-[#6B6B6B]'} flex gap-x-3 items-center px-4 py-2 text-sm font-normal  hover:bg-[#F1F3F5] hover:cursor-pointer`}
                >
                  <FaRegCircleCheck className="text-lg"/>
                  {option}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
