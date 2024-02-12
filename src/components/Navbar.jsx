import React from "react";

const Navbar = () => {
  return (
    <div className="relative nav_font p-3 flex justify-around bg-[#181818] text-white my-4 rounded-xl">
      <h3 className="sections">Trading</h3>
      <h3 className="sections">Automation</h3>
      <h3 className="sections">Portfolio</h3>
      <h3 className="sections">Alerts</h3>
      <h3>Training</h3>
    </div>
  );
};

export default Navbar;
