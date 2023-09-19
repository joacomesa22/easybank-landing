import React from "react";

const WhyCard = ({ img, title, text }) => {
  return (
    <div className="flex flex-col gap-3 items-center text-center max-w-[300px] md:items-start md:text-start">
      <img src={img} alt={title} />
      <h4 className="text-xl text-[var(--darkBlue)]">{title}</h4>
      <p className="font-thin text-[var(--grayishBlue)]">{text}</p>
    </div>
  );
};

export default WhyCard;
