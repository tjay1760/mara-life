import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import individualIcon from "../../assets/products/individual-icon.svg";
import companiesIcon from "../../assets/products/group-icon.svg";
import enterprisesIcon from "../../assets/products/enterprises-icon.svg";
import emailIcon from "../../assets/products/email-icon.svg";
import callingIcon from "../../assets/products/calling-icon.svg";
import personIcon from "../../assets/products/person-icon.svg";

const RegistrationForm = () => {
  const location = useLocation();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedClientType, setSelectedClientType] = useState(null);
  const [selectedContactMethod, setSelectedContactMethod] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (location.hash === "#registration-form") {
      const formElement = document.getElementById("registration-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const clientTypes = [
    { label: "Individuals", icon: individualIcon },
    { label: "Scaling Companies", icon: companiesIcon },
    { label: "Enterprises", icon: enterprisesIcon },
  ];

  const contactMethods = [
    { label: "Email", icon: emailIcon },
    { label: "Phone", icon: callingIcon },
    { label: "In Person", icon: personIcon },
  ];

  const formFields = [
    { label: "Company Name", id: "company-name", type: "text", required: true },
    { label: "Contact Person", id: "contact-person", type: "text", required: true },
    { label: "Position/Role", id: "position-or-role", type: "text", required: true },
    { label: "Company Website (If available)", id: "company-website", type: "text", required: false },
    { label: "Email Address", id: "email", type: "email", required: true },
    { label: "Phone Number", id: "phone-number", type: "text", required: true },
  ];

  return (
    <div id="registration-form" className="mt-10 bg-gray-100 w-11/12 mx-auto p-2 flex flex-col items-center justify-center text-center">
      <h1 className="text-green-950 font-bold text-2xl">Pesticide Registration Assistance Form</h1>
      <p>Please fill out the form below to register your pesticide product with our assistance program.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="border bg-white w-11/12 p-4 mt-4 rounded-xl">
        <div className="client-information-header mt-5 flex flex-col items-start">
          <h1 className="text-sm text-gray-600">Step 1</h1>
          <div className="description md:flex md:items-center md:justify-center md:gap-2">
            <h1 className="font-medium text-base text-green-900">
              Client Information
            </h1>
            <p className="text-xs">
              All fields with Asterix (<span className="text-red-600">*</span>
              ) are mandatory
            </p>
          </div>
        </div>
        <div className="line w-11/12 h-[1px] bg-gray-200 mx-auto mt-2"></div>
        <div className="client-type mt-5">
          <h1 className="text-sm text-left">Client Type</h1>
          <div className="client-type-holder border border-gray-200 p-2 rounded-xl flex flex-col gap-2 md:flex-row md:justify-between md:w-5/6 md:border-none">
            {clientTypes.map((type) => (
              <div
                key={type.label}
                className={`flex justify-between items-center border gap-2 rounded-lg py-1 px-2 cursor-pointer ${selectedClientType === type.label ? "border-green-500 text-green-700" : "border-gray-200"}`}
                onClick={() => setSelectedClientType(type.label)}
              >
                <img src={type.icon} alt={type.label} />
                <h1>{type.label}</h1>
                {selectedClientType === type.label && <div className="dot h-2 w-2 rounded-full bg-green-500 border border-gray-700"></div>}
              </div>
            ))}
          </div>
        </div>
        
        <div className="form-fields mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          {formFields.map((field) => (
            <div key={field.id} className="mb-4 flex flex-col items-start">
              <label htmlFor={field.id} className="text-sm md:text-left">
                {field.label} {field.required && <span className="text-red-600">*</span>}
              </label>
              <input
                type={field.type}
                id={field.id}
                className="border border-gray-200 rounded-lg w-full p-2"
                {...register(field.id, { required: field.required })}
              />
              {errors[field.id] && <p className="text-red-500 text-xs">This field is required</p>}
            </div>
          ))}
        </div>
        <label htmlFor="prefered-contact-method" className="text-sm">Preferred Contact Method <span className="text-red-600">*</span></label>
        <div className="prefered-contact-method border border-gray-200 p-2 mt-5 rounded-xl flex flex-col gap-2 md:flex-row md:justify-between md:w-2/3 md:border-none">
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className={`flex justify-between items-center border rounded-lg py-1 px-2 gap-2 cursor-pointer ${selectedContactMethod === method.label ? "border-green-500 text-green-700" : "border-gray-200"}`}
              onClick={() => setSelectedContactMethod(method.label)}
            >
              <img src={method.icon} alt={method.label} />
              <h1>{method.label}</h1>
              {selectedContactMethod === method.label && <div className="dot h-2 w-2 rounded-full bg-green-500 border border-gray-700"></div>}
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
