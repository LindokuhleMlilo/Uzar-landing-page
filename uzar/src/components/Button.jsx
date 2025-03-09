import React from "react";

const Button = ({ children, variant = "default", size = "default", className, ...props }) => {
  const baseStyles = "font-medium rounded-md transition-colors focus-visible:outline-none";
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    lg: "px-6 py-3 text-lg",
  };
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props} 
    >
      {children}
    </button>
  );
};

export default Button;
