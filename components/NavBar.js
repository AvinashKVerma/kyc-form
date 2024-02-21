import React from "react";

const NavBar = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 justify-center items-center">
      <img
        src="/img/jbvnl.png"
        className="h-12 md:h-16 w-auto"
        alt="JBVNL Logo"
      />
      <img
        src="/img/jbvnl-banner.jpg"
        className="md:ml-4 w-full md:w-auto"
        alt="JBVNL Banner"
      />
    </div>
  );
};

export default NavBar;
