import React, { useState } from "react";
import { Link } from "react-router";
import NavLogo from '../../assets/navbar/Navbar_logo.svg';
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  // State to toggle the menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <button
       onClick={toggleMenu}
       className={`${isMenuOpen?"border-none": "border border-gray-200 rounded-xl p-[1px]"} text-3xl text-gray-600 md:hidden absolute top-4 right-2`}
       aria-label="Toggle menu"
     >
       {isMenuOpen ? <IoCloseOutline /> : <IoMenuOutline />}
     </button>
    <div className={`${isMenuOpen ? "flex" : "hidden"} flex-col items-center border border-gray-300 rounded-2xl h-96 m-3 gap-3`}>
     
     <img src={NavLogo} className="pb-6 px-4 pt-3 h-20" alt="Navbar Logo" />
     <nav
       className={" flex flex-col gap-4 font-semibold text-gray-500 text-center md:flex"}
     >
       <Link to={"/"}>
         <button>Home</button>
       </Link>
       <Link to={"/about"}>
         <button>About</button>
       </Link>
       <Link to={"/products"}>
         <button>Product</button>
       </Link>
       <Link to={"/trainings"}>
         <button>Trainings</button>
       </Link>
       <Link to={"/blog"}>
         <button>Blog</button>
       </Link>
       <Link to={"/contact"}>
         <button>Contact</button>
       </Link>
     </nav>
   </div>
    </>
    
  );
};

export default Navbar;
