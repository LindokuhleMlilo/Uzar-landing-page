import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export default Card;