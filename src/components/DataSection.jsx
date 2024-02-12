import React from "react";
import AlertsTable from "./AlertsTable.jsx";
import Filters from "./Filters.jsx";

const DataSection = () => {
  return (
    <section className="grid gap-x-3 grid-cols-4 bg-[#181818] p-4 rounded-xl">
      <Filters />
      <AlertsTable />
    </section>
  );
};

export default DataSection;
