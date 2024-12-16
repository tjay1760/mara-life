import React from "react";
import { Link } from "react-router";
import NavLogo from '../../assets/navbar/Navbar_logo.svg'
const Navbar = () => {
  return (
    <div className="flex flex-col justify-center items-center border border-gray-300 rounded-2xl h-96 m-3 gap-3">
        <img src={NavLogo} className="pb-6 px-4"/>
        <nav className="flex flex-col gap-4 font-semibold text-gray-500 text-center">
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
  );
};

export default Navbar;
