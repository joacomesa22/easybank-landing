import React from "react";
import bgMobile from "../assets/images/bg-intro-mobile.svg";
import bgDesktop from "../assets/images/bg-intro-desktop.svg";
import mobileMockups from "../assets/images/image-mockups.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="md:pt-28 md:px-4 w-full flex justify-center">
      <div className="flex flex-col items-center justify-center md:flex-row-reverse max-w-[1200px] w-full">
        <div className="relative w-full max-h-[600px] md:max-h-none md:w-auto md:max-w-[1000px]">
          <img
            src={bgMobile}
            alt="bg mobile"
            className="w-full h-full md:hidden"
          />

          <img
            src={bgDesktop}
            alt="bg desktop"
            className="w-full h-full hidden md:block "
          />
          <img
            src={mobileMockups}
            alt="mobile"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-6 text-center px-4 md:items-start md:text-start max-w-[420px]">
          <h1 className="font-thin text-3xl md:text-5xl text-[var(--darkBlue)]">
            Next generation digital banking
          </h1>
          <p className="text-[var(--grayishBlue)] font-thin">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Hero;
