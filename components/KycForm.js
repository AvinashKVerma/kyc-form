"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import Title from "./Title";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Upload from "./Upload";
import { clearAllFormData, getAllFormData, storeFormData } from "@/utils/idb";

const KycForm = () => {
  const [formData, setFormData] = useState({
    consumerNo: 0,
    name: "Abcd",
    mobile: "123456",
    latitude: "5",
    longitude: "6",
    area: "pqrs",
    photo: null,
    option: "a ",
    meterReading: "125",
  });
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  // const onChange = () => {
  //   console.log("Onchange");
  // };

  useEffect(() => {
    const checkInternetAndSubmit = async () => {
      const isConnected = await checkInternetConnection();
      if (isConnected) {
        await submitFormData();
      }
    };

    // Check for internet connection when component mounts
    checkInternetAndSubmit();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkInternetConnection = async () => {
    try {
      await fetch("https://api.ipify.org");
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = async (event) => {
    formData.consumerNo++;
    event.preventDefault();

    const internetStatus = await checkInternetConnection();
    // Store form data in IndexedDB regardless of internet connectivity
    if (internetStatus) {
      console.log(formData.consumerNo);
      const formsData = {
        consumerNo: formData.consumerNo,
        name: formData.name,
        mobile: formData.mobile,
        latitude: formData.latitude,
        longitude: formData.longitude,
        area: formData.area,
        meterReading: formData.meterReading,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Assuming you're sending JSON data
        },
        body: JSON.stringify(formsData),
      };

      try {
        const response = await fetch(
          "https://experimentserver.onrender.com/api/submit-form",
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const responseData = await response.json();
        console.log(responseData); // Handle response data as needed
        setFormData({
          consumerNo: "",
          name: "",
          mobile: "",
          latitude: "",
          longitude: "",
          area: "",
          photo: null,
          option: "",
          meterReading: "",
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    } else {
      console.log(formData.consumerNo);
      await storeFormData(formData);
      // setFormData({
      //   consumerNo: "",
      //   name: "",
      //   mobile: "",
      //   latitude: "",
      //   longitude: "",
      //   area: "",
      //   photo: null,
      //   option: "",
      //   billOrReading: null,
      // });
    }
  };

  const submitFormData = async () => {
    try {
      // Get all stored form data from IndexedDB
      const storedFormData = await getAllFormData();
      if (storedFormData.length > 0) {
        // If there is stored data, send it to the server
        await sendDataToServer(storedFormData);
        // Clear stored data from IndexedDB after successful submission
        await clearAllFormData();
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const sendDataToServer = async (data) => {
    // Hit your API to send the data to the server
    const storedData = await getAllFormData();
    storedData.map(async (ele) => {
      const formsData = {
        consumerNo: ele.consumerNo,
        name: ele.name,
        mobile: ele.mobile,
        latitude: ele.latitude,
        longitude: ele.longitude,
        area: ele.area,
        meterReading: ele.meterReading,
      };
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Assuming you're sending JSON data
        },
        body: JSON.stringify(formsData),
      };
      try {
        const response = await fetch(
          "https://experimentserver.onrender.com/api/submit-form",
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const responseData = await response.json();
        console.log(responseData); // Handle response data as needed
        setFormData({
          consumerNo: "",
          name: "",
          mobile: "",
          latitude: "",
          longitude: "",
          area: "",
          photo: null,
          option: "",
          meterReading: "",
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    });
  };

  return (
    <div className="bg-slate-300 p-5">
      <button className="p-2 bg-cyan-600 rounded-md m-5" onClick={handleSubmit}>
        Send
      </button>
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
        {/* <Title title={"SUPPLY INFORMATION"} /> */}
        <Title title={"ADDRESS"} />
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
          {/* <div className="flex p-1">
            <Dropdown label={"Photograph"} options={["Photo"]} />
            <Upload handleDelete={"onChange()"} handleUpload={"onChange()"} />
          </div>
          <div className="flex p-1">
            <Dropdown label={"ID Proof"} options={options} />
            <Upload handleDelete={"onChange()"} handleUpload={"onChange()"} />
          </div>
          <div className="flex p-1">
            <Dropdown label={"Ownership Proof"} options={options} />
            <Upload handleDelete={"onChange()"} handleUpload={"onChange()"} />
          </div> */}
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
