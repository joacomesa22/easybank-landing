import React from "react";
import WhyCard from "./WhyCard";
import iconAPI from "../assets/images/icon-api.svg";
import iconBudgeting from "../assets/images/icon-budgeting.svg";
import iconOnboarding from "../assets/images/icon-onboarding.svg";
import iconOnline from "../assets/images/icon-online.svg";

const Why = () => {
  return (
    <div className="bg-[var(--lightGrayishBlue)] p-4 md:p-10 mt-20 flex justify-center">
      <div className="flex flex-col gap-14 max-w-[1400px]">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-start ">
          <h2 className="text-4xl text-[var(--darkBlue)]">
            Why choose Easybank?
          </h2>
          <p className="font-thin text-[var(--grayishBlue)] max-w-[500px]">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>
        <div className="flex justify-center flex-wrap items-center gap-8">
          <WhyCard
            title={"Online Banking"}
            text={
              "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
            }
            img={iconOnline}
          />
          <WhyCard
            title={"Simple Budgeting"}
            text={
              "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."
            }
            img={iconBudgeting}
          />
          <WhyCard
            title={"Fast Onboarding"}
            text={
              " We don't do branches. Open your account in minutes online and start taking control of your finances right away."
            }
            img={iconOnboarding}
          />
          <WhyCard
            title={"Open API"}
            text={
              "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."
            }
            img={iconAPI}
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
