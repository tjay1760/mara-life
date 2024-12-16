import React, { useState } from "react";
import { Link } from "react-router";
import NavLogo from "../../assets/navbar/Navbar_logo.svg";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu (optional)
  };

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className={`${
          isMenuOpen
            ? "border-none"
            : "border border-gray-200 rounded-xl p-[1px]"
        } text-3xl text-gray-600 md:hidden absolute top-4 right-2 z-10`}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden md:flex"
        } flex-col items-center border border-gray-300 rounded-2xl h-96 m-3 gap-3 absolute w-11/12 md:h-auto lg:w-[60%] md:right-1 md:rounded-xl md:justify-between`}
      >
        <img
          src={NavLogo}
          className="pb-6 px-4 pt-3 h-20 md:hidden"
          alt="Navbar Logo"
        />
        <nav
          className={
            " flex flex-col gap-4 font-semibold text-gray-500 text-center md:flex md:flex-row md:items-start md:w-full md:justify-between md:p-1"
          }
        >
          <Link to={"/"}>
            <button
              className={`md:rounded-xl md:py-1 md:px-3 hover:bg-gray-200 ${
                activeLink === "/"
                  ? "md:bg-green-600 md:text-white"
                  : "md:active:bg-green-600"
              }`}
              onClick={() => handleLinkClick("/")}
            >
              Home
            </button>
          </Link>
          <Link to={"/about"}>
            <button
              className={` md:rounded-xl md:py-1 md:px-3 hover:bg-gray-200 ${
                activeLink === "/about"
                  ? "md:bg-green-600 md:text-white"
                  : "md:active:bg-green-600"
              }`}
              onClick={() => handleLinkClick("/about")}
            >
              About
            </button>
          </Link>
          <Link to={"/products"}>
            <button
              className={` md:rounded-xl md:py-1 md:px-3 hover:bg-gray-200 ${
                activeLink === "/products"
                  ? "md:bg-green-600 md:text-white"
                  : "md:active:bg-green-600"
              }`}
              onClick={() => handleLinkClick("/products")}
            >
              Product
            </button>
          </Link>
          <Link to={"/trainings"}>
            <button
              className={` md:rounded-xl md:py-1 md:px-3 hover:bg-gray-200 ${
                activeLink === "/trainings"
                  ? "md:bg-green-600 md:text-white"
                  : "md:active:bg-green-600"
              }`}
              onClick={() => handleLinkClick("/trainings")}
            >
              Trainings
            </button>
          </Link>
          <Link to={"/blog"}>
            <button
              className={` md:rounded-xl md:py-1 md:px-3 hover:bg-gray-200 ${
                activeLink === "/blog"
                  ? "md:bg-green-600 md:text-white"
                  : "md:active:bg-green-600"
              }`}
              onClick={() => handleLinkClick("/blog")}
            >
              Blog
            </button>
          </Link>
          <Link to={"/contact"}>
            <button
              className={` md:rounded-xl md:py-1 md:px-3 hover:bg-gray-200 ${
                activeLink === "/contact"
                  ? "md:bg-green-600 md:text-white"
                  : "md:active:bg-green-600"
              }`}
              onClick={() => handleLinkClick("/contact")}
            >
              Contact
            </button>
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
