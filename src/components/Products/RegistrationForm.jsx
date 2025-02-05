import React from "react";
import { useForm } from "react-hook-form";
import individualIcon from "../../assets/products/individual-icon.svg";
import companiesIcon from "../../assets/products/group-icon.svg";
import enterprisesIcon from "../../assets/products/enterprises-icon.svg";
import emailIcon from "../../assets/products/email-icon.svg";
import callingIcon from "../../assets/products/calling-icon.svg";
import personIcon from "../../assets/products/person-icon.svg";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="mt-10 bg-gray-100 w-11/12 mx-auto p-2 flex flex-col items-center justify-center text-center">
      <h1 className="text-green-950 font-bold text-2xl">
        Pesticide Registration Assistance Form
      </h1>
      <p>
        Please fill out the form below to register your pesticide product with
        our assistance program.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border bg-white w-11/12 p-4 mt-4 rounded-xl"
      >
        <div className="form-holder ">
          <a className="border border-green-800 rounded-3xl flex px-4 py-2 items-center justify-between gap-4">
            <div className="circle border border-green-800 rounded-full p-1 w-7 h-7 flex justify-center items-center">
              1
            </div>
            <h1>Client Information</h1>
          </a>
          <div className="client-information-header mt-5">
            <h1 className="text-sm text-gray-600">Step 1</h1>
            <div className="description">
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
          <div className="client-type">
            <h1 className="text-sm">Client Type</h1>
            <div className="client-type-holder flex flex-col gap-2">
              <div className="individuals flex justify-between items-center border border-gray-200 rounded-lg py-1 px-2">
                <img src={individualIcon} />
                <h1>Individuals</h1>
                <div className="dot h-2 w-2 rounded-full bg-green-500 border border-gray-700"></div>
              </div>
              <div className="individuals flex justify-between items-center border border-gray-200 rounded-lg py-1 px-2">
                <img src={companiesIcon} />
                <h1>Scaling Companies</h1>
                <div className="dot h-2 w-2 rounded-full bg-green-500 border border-gray-700"></div>
              </div>
              <div className="individuals flex justify-between items-center border border-gray-200 rounded-lg py-1 px-2">
                <img src={enterprisesIcon} />
                <h1>Enterprises</h1>
                <div className="dot h-2 w-2 rounded-full bg-green-500 border border-gray-700"></div>
              </div>
            </div>
            <div className="form-fields">
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
              <div className="prefered-contact-method">
                <label htmlFor="prefered-contact-method" className="text-sm">
                  Prefered Contact Method <span className="text-red-600">*</span>
                </label>
                <div className="email-contact flex justify-between items-center border border-gray-200 rounded-lg py-1 px-2">
                  <img src={emailIcon} />
                  <h1>Email</h1>
                  <div className="dot h-2 w-2 rounded-full bg-green-500 border border-gray-700"></div>
                </div>
                <div className="email-contact flex justify-between items-center border border-gray-200 rounded-lg py-1 px-2">
                  <img src={callingIcon} />
                  <h1>Phone</h1>
                  <div className="dot h-2 w-2 rounded-full bg-green-500 border border-gray-700"></div>
                </div>
                <div className="email-contact flex justify-between items-center border border-gray-200 rounded-lg py-1 px-2">
                  <img src={personIcon} />
                  <h1>In Person</h1>
                  <div className="dot h-2 w-2 rounded-full bg-green-500 border border-gray-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
