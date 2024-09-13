import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AppLayout from "../AppLayout";
import logo from "../assets/Logo.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const content = (
    <div className="md:hidden block absolute top-16 w-full left-0 right-0 bg-[#130f31]  transition-transform duration-200 transform ">
      <AppLayout>
        <ul className="text-center text-xl px-[20px] shadow-2xl  transition-transform duration-200 transform pb-8">
          <li className="my-4 py-4 border-black ">
            <Link to="/about" onClick={handleClick}>
              About
            </Link>
          </li>
          <li className="my-4 py-4 border-black">
            <Link to="/services" onClick={handleClick}>
              Services
            </Link>
          </li>
          <li className="my-4 py-4 border-black">
            <Link to="/blogs" onClick={handleClick}>
              Blogs
            </Link>
          </li>
          <li className="my-4 py-4 border-black">
            <Link to="/contact" onClick={handleClick}>
              Contact
            </Link>
          </li>
          <li className="transition hover:underline cursor-pointer hover:text-orange-500 px-2 py-1  rounded-xl bg-orange-500 font-[10px] w-[50%] mx-20 ">
            <Link to="/login" onClick={handleClick}>
              Login
            </Link>
          </li>
        </ul>
      </AppLayout>
    </div>
  );

  return (
    <div className="bg-[#130f31]  text-white sticky top-0 z-50">
      <AppLayout>
        <nav>
          <div className="h-16 flex justify-between z-20 text-white lg:py-5 px-[20px] py-4 ">
            <div className="flex items-center flex-1">
              <Link to="/">
                <img src={logo} alt="Education News" className="h-[70px] m-4" />
              </Link>
            </div>
            <div className="md:flex md:flex-1 items-center justify-end font-normal hidden">
              <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px] ">
                  <li className="hover:text-orange-500 transition hover:underline cursor-pointer">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="hover:text-orange-500 transition hover:underline cursor-pointer">
                    <Link to="/services">Services</Link>
                  </li>
                  <li className="hover:text-orange-500 transition hover:underline cursor-pointer">
                    <Link to="/blogs">Blogs</Link> {/* Match with /blogs */}
                  </li>
                  <li className="hover:text-orange-500 transition hover:underline cursor-pointer">
                    <Link to="/contact">Contact</Link>{" "}
                    {/* Match with /contact */}
                  </li>
                  <li className="transition hover:underline cursor-pointer hover:text-black px-2 py-1 rounded-xl bg-orange-500 font-[10px]">
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-white flex items-center gap-2 md:gap-4 mr-4">
              <a href="">
                <FaFacebook className="" />
              </a>
              <a href="">
                <FaLinkedin className="" />
              </a>
              <a href="">
                <FiInstagram className="" />
              </a>
            </div>
            <div>{click && content}</div>
            <button
              className="block md:hidden translate text-white"
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <CiMenuBurger />}
            </button>
          </div>
        </nav>
      </AppLayout>
    </div>
  );
};

export default Navbar;
