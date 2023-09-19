import React from "react";

const ArticleCard = ({ img, author, title, text }) => {
  return (
    <div className="flex flex-col max-w-[300px] bg-[var(--veryLightGray)]">
      <div className="w-full h-full">
        <img src={img} alt={title} />
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-2">
          <span className="text-xs text-[var(--grayishBlue)]">{author}</span>
          <h4 className="text-[1.2rem] text-[var(--darkBlue)]">{title}</h4>
          <p className="text-sm text-[var(--grayishBlue)]">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
