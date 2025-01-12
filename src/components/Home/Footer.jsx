import React from "react";
import Logo from "../../assets/hero/hero-logo.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const ourContacts = [
  "+254716123456",
  "+254716123456",
  "+254716123456",
  "+254716123456",
];

function Footer() {
  return (
    <div className="mt-10 p-2 bg-green-950 rounded-xl text-white flex flex-col gap-2 text-xs w-11/12 mx-auto">
      <img src={Logo} alt="Logo" className="h-10 w-1/3" />
      <div className="contacts">
        <h1>Contacts</h1>
        {ourContacts.map((contact, index) => (
          <div key={index}>{contact}</div>
        ))}
      </div>
      <div className="map">
        <h1>Find Us</h1>
        <div className="map-container w-11/12 mx-auto rounded-2xl overflow-hidden my-2">
          <iframe
            width="100%"
            height="auto"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mara%20Life+(Mara%20Life%20Sciences)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <div className="socials flex flex-row w-2/3 justify-between mx-auto">
        <div className="facebook border p-1 rounded-full">
          <FaFacebookF />
        </div>

        <div className="instagram border p-1 rounded-full">
          <FaInstagram />
        </div>
        <div className="tiktock border p-1 rounded-full">
          <FaTiktok />
        </div>
        <div className="twitter border p-1 rounded-full">
          <FaXTwitter />
        </div>
        <div className="whatsapp border p-1 rounded-full">
          <FaWhatsapp />
        </div>
      </div>
      <div className="copyright">
        @Copyright &nbsp;
        {new Date().getFullYear()}
      </div>
    </div>
  );
}
export default Footer;
