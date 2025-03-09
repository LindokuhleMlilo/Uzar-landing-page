import React from "react";

const Card = ({ title, description, icon, className }) => {
  return (
    <div className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      <div className="p-6">
        <div className="flex items-center gap-4">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Card;