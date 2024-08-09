import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { FiChevronDown } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    home: false,
    blog: false, // Corrected from "Blob" to "blog"
    shop: false,
    about: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (section) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <nav className="bg-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-semibold text-xl tracking-tight">Travelove</span>
          </div>
          <div className="hidden md:flex mt-5 space-x-4">
            {/* Home Section with Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('home')}
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                Home <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen.home && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
                </div>
              )}
            </div>

            {/* Shop Section with Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('shop')}
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                Shop <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen.shop && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
                </div>
              )}
            </div>

            {/* Blog Section with Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('blog')}
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                Blog <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen.blog && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
                </div>
              )}
            </div>

            {/* About Us Section with Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                About Us <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen.about && (
                <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
                </div>
              )}
            </div>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-800 focus:outline-none focus:text-gray-800">
              {menuOpen ? <AiFillCloseCircle className="h-6 w-6" /> : <CiMenuBurger className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Mobile Menu with Dropdowns */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('home')}
                className="text-gray-500 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium flex items-center w-full text-left"
              >
                Home <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen.home && (
                <div className="mt-2 bg-white border rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('shop')}
                className="text-gray-500 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium flex items-center w-full text-left"
              >
                Shop <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen.shop && (
                <div className="mt-2 bg-white border rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('blog')}
                className="text-gray-500 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium flex items-center w-full text-left"
              >
                Blog <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen.blog && (
                <div className="mt-2 bg-white border rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                className="text-gray-500 hover:text-gray-800 block px-3 py-2 rounded-md text-base font-medium flex items-center w-full text-left"
              >
                About Us <FiChevronDown className="ml-1" />
              </button>
              {dropdownOpen.about && (
                <div className="mt-2 bg-white border rounded-md shadow-lg z-10">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 1</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Submenu 2</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
