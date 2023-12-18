import React from "react";

const Paragraph = ({ className, text }) => {
  return <p className={`flex ${className}`}>{text}</p>;
};

export default Paragraph;
