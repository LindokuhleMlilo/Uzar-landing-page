import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardDescription = ({ children, className }) => (
  <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
);

const CardFooter = ({ children, className }) => (
  <div className={`p-4 border-t ${className}`}>{children}</div>
);


export { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter };