import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburguer from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const handleNav = () => {
    setActiveNav(!activeNav);
  };

  return (
    <div className="flex flex-col gap-6 items-center fixed top-0 w-full z-40">
      <div className="p-6 flex justify-between items-center w-full max-w-[1400px]  bg-[var(--white)]">
        <img src={logo} alt="logo" />
        <div onClick={handleNav} className="md:hidden">
          {activeNav ? (
            <img src={close} alt="toggle close" />
          ) : (
            <img src={hamburguer} alt="toggle hamburguer" />
          )}
        </div>
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-10 text-[var(--grayishBlue)]">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <button className="py-3 px-6  rounded-full text-[var(--white)] text-sm bg-gradient-to-r from-[#31d35c] to-[#2bb7da] hidden md:block">
          Request Invite
        </button>
      </div>
      <div
        className={`bg-[var(--white)] text-[--darkBlue] p-6 w-[80%] md:hidden ${
          activeNav ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-10 text-[var(--grayishBlue)]">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
