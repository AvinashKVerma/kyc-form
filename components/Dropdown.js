import React from "react";

const Dropdown = ({ label, options }) => {
  return (
    <div className="m-1 flex flex-col">
      <label htmlFor="selectOptions" className="text-sm">
        {label}
      </label>
      <select
        id="selectOptions"
        className="p-2 rounded-md border border-gray-300"
      >
        <option>--Select--</option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
