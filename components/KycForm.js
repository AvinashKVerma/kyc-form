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
        <div className="flex">
          <InputField label={"Consumer No"} />
          <InputField label={"Meter Serial"} />
          <div className="self-center ml-10">
            <button className="bg-blue-300 p-2 rounded-md hover:bg-blue-600">
              Search
            </button>
          </div>
        </div>
        <Title title={"AREA"} />
        <div className="flex justify-between">
          <Dropdown label={"Area"} options={options} />
          <Dropdown label={"Circle"} options={options} />
          <Dropdown label={"Division"} options={options} />
          <Dropdown label={"Subdivision"} options={options} />
          <Dropdown label={"Section"} options={options} />
        </div>
        <Title title={"PERSONAL INFORMATION"} />
        <div className="flex flex-col">
          <div className="flex justify-between">
            <InputField label={"Consumer No"} />
            <Dropdown label={"Applicant Type"} options={options} />
            <InputField label={"Aadhar / PAN"} />
            <InputField label={"Applicant Name"} />
            <Dropdown label={"Gender"} options={["Male", "Female", "Others"]} />
          </div>
          <div className="flex justify-between">
            <InputField label={"Father Name"} />
            <InputField label={"Holding No."} />
            <InputField label={"Plot No."} />
            <InputField label={"Khata No."} />
            <Dropdown
              label={"Locality"}
              options={["Male", "Female", "Others"]}
            />
            <InputField label={"Contact No."} />
          </div>
        </div>
        <Title title={"SUPPLY INFORMATION"} />
        <div className="flex justify-between">
          <InputField label={"House No."} />
          <InputField label={"Street"} />
          <InputField label={"Area / Colony"} />
          <Dropdown label={"District"} options={options} />
          <InputField label={"PIN"} />
        </div>

        <Title title={"METER DETAILS"} />
        <div className="flex flex-col">
          <div className="flex">
            <Dropdown label={"Make"} options={options} />
            <InputField label={"Serial No."} />
            <InputField label={"Digit"} />
            <InputField label={"Body Seal"} />
            <InputField label={"Terminal Seal"} />
            <InputField label={"Reading Kwh"} />
          </div>
          <div className="flex">
            <InputField label={"Reading Kvah"} />
            <InputField label={"Meter Type"} />
            <InputField label={"Demand KVA"} />
            <InputField label={"Book No."} />
            <Dropdown label={"Meter Owner"} options={options} />
            <InputField label={"Sec. Amt"} />
          </div>
          <div className="flex ">
            <InputField label={"Reciept No."} />
            <InputField label={"Sec. Dep. Date"} />
            <InputField label={"Conn. Date"} />
          </div>
        </div>

        <Title title={"LOAD FEASIBILITY"} />
        <div className="flex">
          <InputField label={"Name of PSS"} />
          <InputField label={"Name of 33/11 KV feeder"} />
          <Dropdown label={"Premises Type"} options={options} />
          <Dropdown label={"Purpose"} options={options} />
        </div>
        <Title title={"DOCUMENTS UPLOAD (OPTIONAL)"} />
        <div className="flex justify-between">
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
