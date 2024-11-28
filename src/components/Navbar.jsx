import { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../index.css";
import "./main.js"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <nav className="sticky top-0 z-10 px-[55px]"> 
        <div
          id="navbar"
          className="max-w-screen-xl flex flex-wrap align-middle items-center  py-4 px-5 justify-between rounded-xl  shadow-xl lg:rounded-full">
          <NavLink
            to="/hero"
            className="flex items-center  space-x-3 rtl:space-x-reverse"
          >
            {/* <img src={logo} alt="War Shop Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              <span className="text-[]">Blue</span> Room
            </span>
          </NavLink>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
            onClick={toggleMenu}
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto transition-all duration-500 ease-in-out ${isOpen ? "block" : "hidden md:block"
              }`}
            id="navbar-default"
          >
            <ul className={`flex flex-col md:flex-row md:space-x-8 ${isOpen ? "bg-transparent " : ""}`}>
              <li className="relative group">
                <NavLink to="" className="block py-2 px-3 rounded hover:bg-[--timberwolf] focus:bg-[--timberwolf] hover:text-black focus:text-black ">
                  Service <i className="fa-solid fa-sort-down"></i>
                </NavLink>
                <div
                  className="absolute left-0 z-10 p-4  md:w-[230px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ">
                    <div className="link mt-3 pb-3">
                      <NavLink to="" className="underline text-neutral-800">
                        <span className="font-bold text-[15px]">Company Incorporation</span><br />
                      </NavLink>
                      
                    </div>
                      {/* Second Link */}
                    <div className="link mt-3 pb-3">
                      <NavLink to="" className="underline text-neutral-800">
                        <span className="font-bold text-[15px]">Accounting</span><br />
                      </NavLink>
                      </div>

                      {/* Third Link */}
                    <div className="link mt-3 pb-3">
                      <NavLink to="" className="underline text-neutral-800">
                        <span className="font-bold text-[15px]">Businesses & contractors</span><br />
                      </NavLink>
                      </div>
                  </div>
                  
              </li>
              <li>
                <NavLink to="/card" className="block py-2 px-3 rounded hover:bg-[--timberwolf] focus:bg-[--timberwolf] hover:text-black focus:text-black ">About
                  Blue
                  Room</NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="block py-2 px-3 rounded hover:bg-[--timberwolf] focus:bg-[--timberwolf] hover:text-black focus:text-black ">Pricing</NavLink>
              </li>
              <li className="relative group">
                <NavLink to="/resources" className="block py-2 px-3 rounded hover:bg-[--timberwolf] focus:bg-[--timberwolf] hover:text-black focus:text-black ">
                  Resources <i className="fa-solid fa-sort-down"></i>
                </NavLink>
                <div
                  className="absolute left-0 z-10 pl-5 w-[300px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 grid gap-4">
                  <div className="py-4 text-neutral-500">
                    <h2 className="font-bold text-[20px] px-4 text-[--timberwolf]">Resources</h2>
                    <ul>
                      <li>
                        <NavLink to="/key-dates" className="block px-4 py-2 hover:underline">Key Dates</NavLink>
                      </li>
                      <li>
                        <NavLink to="/business-guides" className="block px-4 py-2 hover:underline">Business
                          Guides</NavLink>
                      </li>
                      <li>
                        <NavLink to="/checklists" className="block px-4 py-2 hover:underline">Checklists &
                          Ebooks</NavLink>
                      </li>
                      <li>
                        <NavLink to="/seo" className="block px-4 py-2 hover:underline">Client stories</NavLink>
                      </li>
                      <li>
                        <NavLink to="/seo" className="block px-4 py-2 hover:underline">News and updates</NavLink>
                      </li>
                      <li>
                        <NavLink to="/seo" className="block px-4 py-2 hover:underline">Support centre</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <NavLink to="/contact"
                  className="block py-2 px-3 rounded hover:bg-[--timberwolf] focus:bg-[--timberwolf] hover:text-black focus:text-black ">Contact</NavLink>
              </li>
            </ul>
          </div>
          {/* Call to Action Buttons (Hidden on small screens)  */}
          <div className="hidden lg:flex space-x-4 text-black">
            <NavLink to="/login"
              className="text-[--darkgtreen] py-2 px-5 border-2 border-transparent rounded-xl hover:bg-[--timberwolf] hover:text-[--white] hover:border-slate-100 transition ease-in-out delay-100">Login</NavLink>
            <NavLink to="/registration"
              className="text-[--white] py-2 px-5 border-2 border-transparent rounded-xl bg-[--timberwolf] hover:border-slate-100 transition ease-in-out delay-100">Register</NavLink>
          </div>
        </div>
        </nav>
    </>
  );
};

export default Navbar;
