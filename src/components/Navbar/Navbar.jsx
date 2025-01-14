import React, { useState } from "react";
import { Link } from "react-router";
import NavLogo from "../../assets/navbar/Navbar_logo.svg";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Button to toggle the menu */}
      <button
        onClick={toggleMenu}
        className={`${
          isMenuOpen
            ? "border-none"
            : "border border-gray-200 border-opacity-50 rounded-xl p-[1px]"
        } text-3xl text-gray-600 lg:hidden fixed top-4 right-2 z-30`}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
      </button>

      {/* Background blur effect */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-10"
          onClick={toggleMenu} // Close menu if overlay is clicked
        ></div>
      )}

      {/* Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden lg:flex"
        } flex-col fixed items-center border z-20 bg-white rounded-2xl h-96 m-3 gap-3 w-11/12 lg:h-auto lg:w-[60%] lg:right-1 lg:rounded-xl lg:justify-between lg:fixed lg:border-4 lg:border-opacity-5`}
        style={{
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <img
          src={NavLogo}
          className="pb-6 px-4 pt-3 h-20 lg:hidden"
          alt="Navbar Logo"
        />
        <nav
          className={
            " flex flex-col gap-4 font-semibold text-gray-500 text-center lg:flex lg:flex-row lg:items-start lg:w-full lg:justify-between lg:p-1"
          }
        >
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/products", label: "Product" },
            { path: "/trainings", label: "Trainings" },
            { path: "/blog", label: "Blog" },
            { path: "/contact", label: "Contact" },
          ].map((link) => (
            <Link to={link.path} key={link.path}>
              <button
                className={`lg:rounded-xl lg:py-1 lg:px-3 hover:bg-gray-200 ${
                  activeLink === link.path
                    ? "lg:bg-buttonHover lg:text-white"
                    : "lg:active:bg-buttonHover"
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.label}
              </button>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
