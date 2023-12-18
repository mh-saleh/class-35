import React from "react";

const Image = ({ className, src }) => {
  return <img className={` ${className}`} src={src} alt={src} />;
};

export default Image;
