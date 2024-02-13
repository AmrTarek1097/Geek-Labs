import React, { useState } from "react";
import Alert from "./Alert";

const AlertsTable = () => {
  // const [alert, setAlert] = useState(false);

  return (
    <section className=" alert_font font-semibold rounded-xl bg-[#212121] md:col-span-2 col-span-3 p-5">
      <Alert
        text="Someone Just bought xxxx contracts of $XYZ, this is notable because
          the relative volume on this options trade is X.X%."
      />
      <Alert text='X company released a short report on $XYZ, High IV option sales opps'/>
      <Alert />
      <Alert />
      <Alert />
      <Alert />
    </section>
  );
};

export default AlertsTable;
