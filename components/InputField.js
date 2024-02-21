import React from "react";

const InputField = ({ label, value }) => {
  return (
    <div className="m-1 flex flex-col md:flex-col">
      <label className="text-sm mb-1 md:mr-2">{label}</label>
      <input
        value={value}
        className="p-1 mt-1 border w-full md:w-min"
        placeholder={label}
      />
    </div>
  );
};

export default InputField;
