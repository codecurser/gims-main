import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={logoImage} 
                  alt="GIMS Medical Innovation Hub Logo" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">GIMS Startup Clinic</h3>
                <p className="text-xs opacity-75">Medical Innovation Hub</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              First clinic for startups in a public hospital. Empowering medical innovation through clinical mentorship, validation, and incubation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#about" className="hover:opacity-100 transition-opacity">About Us</a></li>
              <li><a href="#facilities" className="hover:opacity-100 transition-opacity">Facilities</a></li>
              <li><a href="#startups" className="hover:opacity-100 transition-opacity">Our Startups</a></li>
              <li><a href="#collaborate" className="hover:opacity-100 transition-opacity">Collaborate</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm opacity-75">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>GIMS Campus, Greater Noida, UP 201310</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:info@gims-bioincubator.ac.in" className="hover:opacity-100 transition-opacity">
                  info@gims-bioincubator.ac.in
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+911234567890" className="hover:opacity-100 transition-opacity">
                  +91 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-sm opacity-75 mb-4">Get the latest news and opportunities</p>
            <div className="flex space-x-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" size="icon">
                <Mail size={16} />
              </Button>
            </div>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm opacity-75">
          <p>&copy; 2025 GIMS Startup Clinic. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
