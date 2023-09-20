import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import hamburguer from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";
import Button from "./Button";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false);
  const handleNav = () => {
    setActiveNav(!activeNav);
  };

  return (
    <header>
      <div className="flex flex-col gap-6 items-center fixed top-0 w-full z-50 p-6 bg-[var(--white)]">
        <div className=" flex justify-between items-center w-full max-w-[1200px] bg-[var(--white)]">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
          <div onClick={handleNav} className="md:hidden">
            {activeNav ? (
              <img src={close} alt="toggle close" />
            ) : (
              <img src={hamburguer} alt="toggle hamburguer" />
            )}
          </div>
          <nav className="hidden md:block">
            <ul className="flex justify-center items-center gap-10 text-[var(--grayishBlue)]">
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--darkBlue)] duration-150"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--darkBlue)] duration-150"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--darkBlue)] duration-150"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--darkBlue)] duration-150"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[var(--darkBlue)] duration-150"
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <Button />
          </div>
        </div>
      </div>
      <nav
        className={`bg-[var(--white)] text-[--darkBlue] rounded-lg shadow-[rgba(0,_0,_0,_0.69)_0px_30px_90px] p-6 w-[80%] md:hidden z-40 duration-300 fixed left-1/2 transform -translate-x-1/2 ${
          activeNav ? "top-[100px]" : "top-[-700px]"
        }`}
      >
        <ul className="flex flex-col items-center gap-10 text-[var(--darkBlue)] md:text-[var(--grayishBlue)]">
          <li>
            <a href="#" className="hover:text-[var(--darkBlue)] duration-150">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--darkBlue)] duration-150">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--darkBlue)] duration-150">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--darkBlue)] duration-150">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[var(--darkBlue)] duration-150">
              Careers
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
