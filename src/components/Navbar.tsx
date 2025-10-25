import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-4">
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
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#facilities" className="text-foreground hover:text-primary transition-colors">Facilities</a>
            <a href="#startups" className="text-foreground hover:text-primary transition-colors">Startups</a>
            <a href="#collaborate" className="text-foreground hover:text-primary transition-colors">Collaborate</a>
            <Button size="sm">Join Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
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
