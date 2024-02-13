import React from "react";
import AlertsTable from "./AlertsTable.jsx";
import Filters from "./Filters.jsx";

const DataSection = () => {
  return (
    <section className="grid md:gap-x-10 sm:gap-y-5 gap-y-0 sm:grid-cols-1 md:grid-cols-3 grid-cols-4 bg-[#181818] px-16 py-12 rounded-xl ">
      <Filters />
      <AlertsTable />
    </section>
  );
};

export default DataSection;
