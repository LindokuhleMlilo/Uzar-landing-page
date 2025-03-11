import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          {/* Fixed: Changed <Image> to <img> */}
          <img
            src="./src/assets/images/universal.png"
            alt="Universal Protocol Logo"
            width={24}
            height={24}
          />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Universal Protocol. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link to="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Terms
          </Link>
          <Link to="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link to="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
