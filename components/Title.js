import React from "react";

const Title = ({ title }) => {
  return (
    <div className="bg-gray-400 w-full py-1">
      <div className="ml-5 text-base md:text-2xl lg:text-3xl">{title}</div>
    </div>
  );
};

export default Title;
