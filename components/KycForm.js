import React from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Upload from "./Upload";

const KycForm = () => {
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];

  const onChange = () => {
    console.log("Onchange");
  };

  return (
    <div className="bg-slate-300 p-5">
      <div className="p-1 bg-white">
        <NavBar />
        <Title title={"SEARCH DETAILS"} />
        <div className="flex flex-col md:flex-row ">
          <InputField label={"Consumer No"} />
          <InputField label={"Meter Serial"} />
          <div className="self-center ml-0 md:ml-10 mt-2 md:mt-0">
            <button className="bg-blue-300 p-2 rounded-md hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>
        <Title title={"AREA"} />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Dropdown label={"Area"} options={options} />
          <Dropdown label={"Circle"} options={options} />
          <Dropdown label={"Division"} options={options} />
          <Dropdown label={"Subdivision"} options={options} />
          <Dropdown label={"Section"} options={options} />
        </div>
        <Title title={"PERSONAL INFORMATION"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* <InputField label={"Consumer No"} /> */}
          <Dropdown label={"Applicant Type"} options={options} />
          <InputField label={"Aadhar / PAN"} />
          <InputField label={"Applicant Name"} />
          <Dropdown label={"Gender"} options={["Male", "Female", "Others"]} />
          <InputField label={"Father Name"} />
          <InputField label={"Holding No."} />
          <Dropdown label={"Locality"} options={options} />
          <InputField label={"Contact No."} />
        </div>
        <Title title={"SUPPLY INFORMATION"} />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <InputField label={"House No."} />
          <InputField label={"Street"} />
          <InputField label={"Area / Colony"} />
          <Dropdown label={"District"} options={options} />
          <InputField label={"PIN"} />
        </div>
        <Title title={"METER DETAILS"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Dropdown label={"Make"} options={options} />
          {/* <InputField label={"Serial No."} /> */}
          <InputField label={"Digit"} />
          <InputField label={"Body Seal"} />
          <InputField label={"Terminal Seal"} />
          <InputField label={"Reading Kwh"} />
          <InputField label={"Reading Kvah"} />
          <InputField label={"Demand KVA"} />
          <Dropdown label={"Meter Type"} options={options} />
          <InputField label={"Book No."} />
          <Dropdown label={"Meter Owner"} options={options} />
          <InputField label={"Sec. Amt"} />
          <InputField label={"Reciept No."} />
          {/* <InputField label={"Sec. Dep. Date"} /> */}
          <InputField label={"Conn. Date"} />
        </div>
        <Title title={"LOAD FEASIBILITY"} />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <InputField label={"Name of PSS"} />
          <InputField label={"Name of 33/11 KV feeder"} />
          <Dropdown label={"Premises Type"} options={options} />
          <Dropdown label={"Purpose"} options={options} />
        </div>
        <Title title={"DOCUMENTS UPLOAD (OPTIONAL)"} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex p-1">
            <Dropdown label={"Photograph"} options={["Photo"]} />
            <Upload handleDelete={onChange()} handleUpload={onChange()} />
          </div>
          <div className="flex p-1">
            <Dropdown label={"ID Proof"} options={options} />
            <Upload handleDelete={onChange()} handleUpload={onChange()} />
          </div>
          <div className="flex p-1">
            <Dropdown label={"Ownership Proof"} options={options} />
            <Upload handleDelete={onChange()} handleUpload={onChange()} />
          </div>
        </div>
        <div className="self-center ml-10 flex justify-center mt-3">
          <button className="bg-blue-300 p-2 rounded-md hover:bg-blue-600">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default KycForm;
