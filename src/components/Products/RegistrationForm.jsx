import React, { useState } from "react";
import { useForm } from "react-hook-form";
import individualIcon from "../../assets/products/individual-icon.svg";
import companiesIcon from "../../assets/products/group-icon.svg";
import enterprisesIcon from "../../assets/products/enterprises-icon.svg";
import emailIcon from "../../assets/products/email-icon.svg";
import callingIcon from "../../assets/products/calling-icon.svg";
import personIcon from "../../assets/products/person-icon.svg";

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedClientType, setSelectedClientType] = useState(null);
  const [selectedContactMethod, setSelectedContactMethod] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
  };

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

  return (
    <div className="mt-10 bg-gray-100 w-11/12 mx-auto p-2 flex flex-col items-center justify-center text-center">
      <h1 className="text-green-950 font-bold text-2xl">Pesticide Registration Assistance Form</h1>
      <p>Please fill out the form below to register your pesticide product with our assistance program.</p>
      <form onSubmit={handleSubmit(onSubmit)} className="border bg-white w-11/12 p-4 mt-4 rounded-xl">
        <div className="client-type mt-5">
          <h1 className="text-sm">Client Type</h1>
          <div className="client-type-holder border border-gray-200 p-2 rounded-xl flex flex-col gap-2">
            {clientTypes.map((type) => (
              <div
                key={type.label}
                className={`flex justify-between items-center border rounded-lg py-1 px-2 cursor-pointer ${selectedClientType === type.label ? "border-green-500 text-green-700" : "border-gray-200"}`}
                onClick={() => setSelectedClientType(type.label)}
              >
                <img src={type.icon} alt={type.label} />
                <h1>{type.label}</h1>
                {selectedClientType === type.label && <div className="dot h-2 w-2 rounded-full bg-green-500 border border-gray-700"></div>}
              </div>
            ))}
          </div>
        </div>
        <div className="form-fields mt-5">
              <div className="company-name">
                <label htmlFor="company-name" className="text-sm">
                  Company Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="company-name"
                  className="border border-gray-200 rounded-lg w-full p-2"
                />
              </div>
              <div className="contact-person">
                <label htmlFor="contact-person" className="text-sm">
                  Contact Person <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="contact-person"
                  className="border border-gray-200 rounded-lg w-full p-2"
                />
              </div>
              <div className="position-or-role">
                <label htmlFor="position-or-role" className="text-sm">
                  Position/Role <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="position-or-role"
                  className="border border-gray-200 rounded-lg w-full p-2"
                />
              </div>
              <div className="company-website">
                <label htmlFor="company-website" className="text-sm">
                  Company Website(If available)
                </label>
                <input
                  type="text"
                  id="company-website"
                  className="border border-gray-200 rounded-lg w-full p-2"
                />
              </div>
              <div className="email">
                <label htmlFor="email" className="text-sm">
                  Email Address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-200 rounded-lg w-full p-2"
                />
              </div>
              <div className="phone-number">
                <label htmlFor="phone-number" className="text-sm">
                  Phone Number <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="phone-number"
                  className="border border-gray-200 rounded-lg w-full p-2"
                />
              </div>
              
            </div>
        <div className="prefered-contact-method border border-gray-200 p-2 mt-5 rounded-xl flex flex-col gap-2">
          <label htmlFor="prefered-contact-method" className="text-sm">Preferred Contact Method <span className="text-red-600">*</span></label>
          {contactMethods.map((method) => (
            <div
              key={method.label}
              className={`flex justify-between items-center border rounded-lg py-1 px-2 cursor-pointer ${selectedContactMethod === method.label ? "border-green-500 text-green-700" : "border-gray-200"}`}
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
