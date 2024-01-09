import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={` py-4 px-20 bg-secBlack inline-block text-white text-sm font-dm font-bold border-2 border-secBlack ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
