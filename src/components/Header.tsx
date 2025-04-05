
import React, { useState } from "react";
import { Code, Terminal, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terminal-black/90 backdrop-blur-sm border-b border-terminal-gray">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#" 
            className="flex items-center space-x-2"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <Terminal className="h-6 w-6 text-terminal-green" />
            <span className="text-lg font-semibold text-terminal-green tracking-tight">
              <span className="text-white">Eliran Turgeman</span>@portfolio<span className="text-white">:~$</span>
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="block md:hidden text-white hover:text-terminal-cyan"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-terminal-cyan transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={() => window.open('https://www.16elt.com/', '_blank')}
              variant="outline"
              className="border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan/10"
            >
              <Code className="mr-2 h-4 w-4" /> Blog
            </Button>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-2 border-t border-terminal-gray animate-accordion-down">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-muted-foreground hover:text-terminal-cyan transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
            <Button
              onClick={() => window.open('https://www.16elt.com/', '_blank')}
              variant="outline"
              className="border-terminal-cyan text-terminal-cyan hover:bg-terminal-cyan/10"
            >
              <Code className="mr-2 h-4 w-4" /> Blog
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
