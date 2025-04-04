
import React from "react";
import { Terminal } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-terminal-darkgray border-t border-terminal-gray py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Terminal className="h-5 w-5 text-terminal-green mr-2" />
            <span className="text-terminal-green">
              <span className="text-white">dev</span>@portfolio<span className="text-white">:~$</span>
            </span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} | Built with React & TypeScript
            </p>
            <p className="text-xs text-terminal-comment mt-1">
              $ echo "Thanks for visiting" > appreciation.txt
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
