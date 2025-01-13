import React from "react";
import Logo from "../../assets/hero/hero-logo.svg";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter,FaYoutube  } from "react-icons/fa6";
import { Link } from "react-router";

const ourContacts = [
  "+254716123456",
  "+254716123456",
  "+254716123456",
  "+254716123456",
];

function Footer() {
  return (
    <div className="mt-10 p-2 bg-green-950 rounded-xl text-white flex flex-col gap-2 text-xs w-11/12 mx-auto md:flex-row md:justify-between md:p-10">
      <div className="logo-holder md:flex md:flex-col md:justify-between">
      <img src={Logo} alt="Logo" className="h-10" />
      <div className="social-holder">
      <div className="socials flex flex-row gap-2 mx-auto desktop mb-2">
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
        <div className="whatsapp border p-1 rounded-full">
          <FaYoutube />
        </div>
      </div>
        <div className="copyright desktop">
        &copy; &nbsp;Copyright &nbsp;
        {new Date().getFullYear()}
      </div></div>
      
      </div>
     
      <div className="page-links desktop flex flex-col font-bold text-sm gap-1">
<h1 className="font-normal text-xs">Quick Links</h1>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/trainings">Trainings</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="contacts">
        <h1>Contacts</h1>
        {ourContacts.map((contact, index) => (
          <div key={index}>{contact}</div>
        ))}
      </div>
      
      <div className="socials flex flex-row w-2/3 justify-between mx-auto md:hidden">
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
        <div className="whatsapp border p-1 rounded-full">
          <FaYoutube />
        </div>
      </div>
      <div className="copyright md:hidden">
      &copy; &nbsp; Copyright &nbsp;
        {new Date().getFullYear()}
      </div>
    </div>
  );
}
export default Footer;
