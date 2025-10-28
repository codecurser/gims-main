import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImage from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToFacilities = () => {
    const smoothScrollTo = (element: HTMLElement) => {
      const targetPosition = element.offsetTop - 80;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // 1.5 seconds for slower scroll
      let start: number | null = null;

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Easing function for smooth deceleration
        const easeInOutCubic = progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
        
        window.scrollTo(0, startPosition + distance * easeInOutCubic);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };
      
      requestAnimationFrame(animation);
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const facilitiesSection = document.getElementById('facilities');
        if (facilitiesSection) {
          smoothScrollTo(facilitiesSection);
        }
      }, 100);
    } else {
      const facilitiesSection = document.getElementById('facilities');
      if (facilitiesSection) {
        smoothScrollTo(facilitiesSection);
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    } ${
      scrolled ? "bg-card/98 backdrop-blur-xl shadow-xl py-3" : "bg-card/90 backdrop-blur-lg py-4"
    } border-b border-border/50`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={logoImage} 
                alt="GIMS Medical Innovation Hub Logo" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">GIMS Startup Clinic</h1>
              <p className="text-xs text-muted-foreground">Medical Innovation Hub</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <button onClick={scrollToFacilities} className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              Facilities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <Link to="/startups" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              Startups
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/collaborate" className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
              Collaborate
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/join-us">
              <Button size="sm" className="shadow-md hover:shadow-lg transition-all">Join Us</Button>
            </Link>
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
            <Link to="/" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About</Link>
            <button onClick={scrollToFacilities} className="block text-left text-foreground hover:text-primary transition-colors">Facilities</button>
            <Link to="/startups" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Startups</Link>
            <Link to="/collaborate" className="block text-foreground hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Collaborate</Link>
            <Link to="/join-us" onClick={() => setIsOpen(false)}>
              <Button size="sm" className="w-full">Join Us</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
