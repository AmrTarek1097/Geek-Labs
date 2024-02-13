import React from "react";
import AlertsTable from "./AlertsTable.jsx";
import Filters from "./Filters.jsx";

const DataSection = () => {
  return (
    <section className="grid md:gap-x-10 xs:gap-y-5 gap-y-0 xs:grid-cols-1 md:grid-cols-3 grid-cols-4 bg-[#181818] sm:px-16 px-2 py-12 rounded-xl ">
      <Filters />
      <AlertsTable />
    </section>
  );
};

export default DataSection;
