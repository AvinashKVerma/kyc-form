import React from "react";
import { ImBin2 } from "react-icons/im";

const Upload = ({ doc, handleUpload, handleDelete }) => {
  return doc ? (
    <div className="flex w-10">
      <a className="cursor-pointer my-auto ml-2" href="#/" target="_blank">
        View Document
      </a>
      <div
        className="ml-2 my-auto cursor-pointer"
        name="section2f"
        onClick={handleDelete}
      >
        <ImBin2 />
      </div>
    </div>
  ) : (
    <label
      className="custom-file-upload border  bg-gradient-to-br from-slate-100 to-slate-200 text-black/80 rounded-md cursor-pointer p-2 w-fit h-fit self-end"
      onChange={handleUpload}
    >
      <input
        type="file"
        id="fileInputCE"
        name="fileInput"
        accept=".pdf"
        style={{ display: "none" }}
      />
      Upload File
    </label>
  );
};

export default Upload;
