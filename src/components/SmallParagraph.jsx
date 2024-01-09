import React from "react";

const SmallParagraph = ({ className, text }) => {
  return (
    <p className={`font-normal font-dm text-[#767676] text-base ${className}`}>
      {text}
    </p>
  );
};

export default SmallParagraph;
