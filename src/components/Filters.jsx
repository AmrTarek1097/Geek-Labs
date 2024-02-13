import React from "react";
import DropDown from "./DropDown";
import { useForm } from "react-hook-form";

const IndustryArr = ["Health Care", "Real estate"];
const MarketArr = ["Large-Cap", "Small-Cap"];
const RiskArr = ["Low-Risk", "Mid-Risk", "High-Risk"];

const Filters = () => {
  const [selectedIndustry, setSelectedIndustry] =
    React.useState("Insert text here");
  const [selectedMarket, setSelectedMarket] =
    React.useState("Insert text here");
  const [selectedRisk, setSelectedRisk] = React.useState("Insert text here");

  const handleSetValue = (option) => {
    setValue("filter", option, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const form = useForm();
  const { handleSubmit, setValue } = form;

  const onSubmit = (data) => {
    let values;

    values = {
      filters: [{ selectedIndustry, selectedMarket, selectedRisk }],
    };

    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      action="#"
      method="post"
      id="filter"
    >
      <div className="h-[745px] col-span-1 rounded-xl bg-[#212121] px-6 pl-10">
        <div className="pt-3">
          <p className="text-5xl text-center font-bold mt-6 nav_font">
            {" "}
            Filters
          </p>
          <div className="flex flex-col space-y-40 ">
            <div className="mt-4 space-y-6">
              <DropDown
                label="Industry"
                selected={selectedIndustry}
                setSelected={setSelectedIndustry}
                optionArr={IndustryArr}
                handleSetValue={handleSetValue}
              />
              <DropDown
                label="Market Cap"
                selected={selectedMarket}
                setSelected={setSelectedMarket}
                optionArr={MarketArr}
                handleSetValue={handleSetValue}
              />
              <DropDown
                label="Risk"
                optionArr={RiskArr}
                selected={selectedRisk}
                setSelected={setSelectedRisk}
                handleSetValue={handleSetValue}
              />
            </div>
            <button className="w-full text-2xl btn_font p-6 bg-[#554DB7]  rounded-lg font-semibold">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filters;
