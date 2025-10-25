import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-card/95 backdrop-blur-xl shadow-md py-3" : "bg-card/80 backdrop-blur-lg py-4"
    } border-b border-border`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">GB</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">GIMS Bioincubator</h1>
              <p className="text-xs text-muted-foreground">Innovating Life Sciences</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#facilities" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              Facilities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#startups" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              Startups
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <a href="#collaborate" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              Collaborate
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
            <Button size="sm" className="shadow-md hover:shadow-lg transition-all">Join Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4 animate-fade-in">
            <a href="#about" className="block text-foreground hover:text-primary transition-colors">About</a>
            <a href="#facilities" className="block text-foreground hover:text-primary transition-colors">Facilities</a>
            <a href="#startups" className="block text-foreground hover:text-primary transition-colors">Startups</a>
            <a href="#collaborate" className="block text-foreground hover:text-primary transition-colors">Collaborate</a>
            <Button size="sm" className="w-full">Join Us</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
