import React from "react";

const InputField = ({ label, value }) => {
  return (
    <div className="m-1 flex flex-col">
      <label className="text-sm">{label}</label>
      <input
        value={value}
        className="p-1 mt-1  border w-min"
        placeholder={label}
      />
    </div>
  );
};

export default InputField;
