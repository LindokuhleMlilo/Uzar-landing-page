import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            
            <img src="/src/assets/images/universal.png" alt="Universal Protocol Logo" width={32} height={32} />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              UZAR
            </span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link to="/lottery" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Lottery
            </Link>
            <Link to="/offramp" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Offramp
            </Link>
            <Link to="/polymarkets" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Polymarkets
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Link to="https://docs.universalprotocol.org" target="_blank">
              Docs
            </Link>
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Get UZAR
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
